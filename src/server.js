import express from "express"
import dataOp from './helpers/dataOp.js'
import  {getNewTimestamp as Tm} from './helpers/timestamp.js'
import  {searchByValue,sortbyId,doFind} from './helpers/funtionality.js'
// import * as fs from 'fs'
let dataset = null
let endpoint = "http://portal.greenmilesoftware.com/get_resources_since"



const app = express()



// Conhecimento do NLW
import nunjucks  from "nunjucks"
nunjucks.configure("src/views",{
    express: app,
    noCache:true
})
//permitir o uso de funções no nunjuncks
var env = nunjucks.configure();
env.addGlobal('Tm',Tm);
env.addGlobal('parseInt',parseInt);
env.addGlobal("searchByValue",searchByValue)
env.addGlobal("doFind",doFind)



//configurar pasta "public"
app.use(express.static("public"))

app.use(express.json())
app.use(express.urlencoded({ extended : true }))




//configuração de caminhos
app.get("/",(req,res,next)=>{ 
    return res.render("index.html")//passar pelo motor do nunjucks
    console.log("*")
},)


app.get("/search=:id?/:value?",(req,res)=>{ 
    let i = Number(req.params.value)
    let id = String(req.params.id)
    
    
    if(dataset === null){
        dataOp.fetchData(endpoint,25000).then((result)=>{
            dataset = result    
            //search
            if(id!='undefined'){
                result = searchByValue(result,id)
                console.log("busca")
            } else{
                id = ''
                result = dataset
            }
            
            let variables= {
                Tm:Tm,
                search:id,
                parseInt:parseInt,
                allResult:result,
                index: i, div: 20,
                translations: result.slice(i,i+20),
            }
            
            return res.render("search.html",variables)//passar pelo motor do nunjucks
        }).catch((err)=>console.log(">>"+err))
    }else{
        let founded = null 
        if(id!='undefined'){
            founded = searchByValue(dataset,id)
            console.log("busca")
        } else{
            id = ''
            founded = dataset
        }
        let variables= {
            Tm:Tm,
            search:id,
            parseInt:parseInt,
            allResult:founded,
            index: i, div: 20,
            translations: founded.slice(i,i+20)
        }


        return res.render("search.html",variables)
    }
    
})

app.get("/monitor/filter=:id?/:value?",(req,res)=>{

    // return res.render('monitor.html')
    let i = Number(req.params.value)
    let id = String(req.params.id)
    
    
    if(dataset === null){
        dataOp.fetchData(endpoint,25000).then((result)=>{
            dataset = result    
            let elements=null
            //search
            if(id!='undefined'){
                // console.log(result.slice(0,10))
                let aux = sortbyId(result,'language_id')
                result = aux[0]
                elements = aux[1]
                // console.log(test)
            } else{
                id=''
                result = dataset
                elements=0
            }
            let variables= {
                Tm:Tm,
                search:id,
                parseInt:parseInt,
                allResult:result,
                categorys:elements,
                doFind:doFind,
                index: i, div: 20,
                translations: result.slice(i,i+20),
            }
            
            return res.render("monitor.html",variables)//passar pelo motor do nunjucks
        }).catch((err)=>console.log(">>"+err))
    }else{
        let filtered = null
        let elements=null
        //search
        if(id!='undefined'){
            // console.log(result.slice(0,10))
            let aux = sortbyId(dataset,id)
            filtered = aux[0]
            elements = aux[1]
            // console.log(test)
        } else{
            id=''
            filtered = dataset
            elements=0
        }


        let variables= {
            Tm:Tm,
            search:id,
            parseInt:parseInt,
            allResult:filtered,
            doFind:doFind,
            categorys:elements,
            index: i, div: 20,
            translations: filtered.slice(i,i+20)
        }


        return res.render("monitor.html",variables)
    }
})

app.all("*",(req,res)=>{
    
    return res.render("notFound.html")
})



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Express server listening on port', port)
});


