import express from "express"
import dataOp from './dataOp.js'
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


//configurar pasta "public"
app.use(express.static("public"))

app.use(express.json())
app.use(express.urlencoded({ extended : true }))




//configuração de caminhos
app.get("/",(req,res,next)=>{ 
    return res.render("index.html")//passar pelo motor do nunjucks
},)


app.get("/search/:value?",(req,res)=>{ 
    let i = Number(req.params.value)
    if(dataset === null){
        dataOp.fetchData(endpoint,25000).then((result)=>{
            dataset = result
            console.log("l:",result.length," page:",i)
            return res.render("search.html",{translations: result.slice(i,i+10)})//passar pelo motor do nunjucks
        }).catch((err)=>console.log(">>"+err))
    }else{
        console.log()
        return res.render("monitor.html",{translations: dataset.slice(i,i+10)})
    }
    
})


app.get("/monitor/:value?",(req,res)=>{
    let i = Number(req.params.value)
    if(dataset === null){
        dataOp.fetchData(endpoint,25000).then((result)=>{
            dataset = result
            console.log("l:",result.length," page:",i)
            return res.render("monitor.html",{translations: result.slice(i,i+10)})//passar pelo motor do nunjucks
        }).catch((err)=>console.log(">>"+err))
    }else{
        console.log()
        return res.render("monitor.html",{translations: dataset.slice(i,i+10)})
    }
})

app.all("*",(req,res)=>{
    
    return res.render("notFound.html")
})



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Express server listening on port', port)
});


