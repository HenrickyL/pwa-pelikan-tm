import express from "express"
import dataOp from './helpers/dataOp.js'
import  {getNewTimestamp as Tm} from './helpers/timestamp.js'
import  {searchByValue} from './helpers/funtionality.js'
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
            } id = ''
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
        if(id!='undefined'){
            dataset = searchByValue(dataset,id)
            console.log("busca")
        } id = ''
        let variables= {
            Tm:Tm,
            search:id,
            parseInt:parseInt,
            allResult:dataset,
            index: i, div: 20,
            translations: dataset.slice(i,i+20)
        }


        return res.render("search.html",variables)
    }
    
})


app.get("/monitor/filter=:id?/:value?",(req,res)=>{
    let i = Number(req.params.value)
    let id = String(req.params.id)
    
    
    if(dataset === null){
        dataOp.fetchData(endpoint,25000).then((result)=>{
            dataset = result    
            //search
            if(id!='undefined'){
                console.log("filtro")
            } id = ''
            let variables= {
                Tm:Tm,
                search:id,
                parseInt:parseInt,
                allResult:result,
                index: i, div: 20,
                translations: result.slice(i,i+20),
            }
            
            return res.render("monitor.html",variables)//passar pelo motor do nunjucks
        }).catch((err)=>console.log(">>"+err))
    }else{
        let variables= {
            Tm:Tm,
            search:id,
            parseInt:parseInt,
            allResult:dataset,
            index: i, div: 20,
            translations: dataset.slice(i,i+20)
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


