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
app.get("/",(req,res)=>{ 
    console.log("/")
    dataset = dataOp.fetchData(endpoint,10000)
    return res.render("index.html",{title: "Heokudo"})//passar pelo motor do nunjucks
})


app.get("/search",(req,res)=>{ 
    console.log(dataset)
    return res.render("search.html")//passar pelo motor do nunjucks
})

app.get("/monitor",(req,res)=>{

    return res.render("monitor.html")//passar pelo motor do nunjucks
})

app.all("*",(req,res)=>{
    return res.render("notFound.html")
})



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Express server listening on port', port)
});


