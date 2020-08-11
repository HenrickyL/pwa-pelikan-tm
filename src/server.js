import express from "express"
// import pkg from "http-proxy-middleware"
const app = express()
import * as fs from 'fs'

// app.use(express.static(__dirname))

// Conhecimento do NLW
import nunjucks  from "nunjucks"
nunjucks.configure("src/views",{
    express: app,
    noCache:true
})
//configurar pasta "public"
app.use(express.static("public"))
//habilitar o req.body
app.use(express.json())
app.use(express.urlencoded({ extended : true }))



// import {appRouter} from './routes/routes.js'
// // const routes = require("./routes/routes.js")(app, fs);
// appRouter(app, fs)


let sendVar={nome:"henricky", lastname:"lima", age:23, text: "Esta variável foi mandada via express"}

// console.log("dir:"+__dirname)
//configuração de caminhos
app.get("/",(req,res)=>{ 
    return res.render("index.html", {myVar:sendVar})//passar pelo motor do nunjucks
})


app.get("/search",(req,res)=>{ 
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


