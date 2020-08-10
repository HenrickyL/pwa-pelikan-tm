import express from "express"
// import pkg from "http-proxy-middleware"
const app = express()


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
app.use(express.urlencoded({ extended : true }))
// app.usar( bodyParser.json());



// console.log("dir:"+__dirname)
//configuração de caminhos
app.get("/",(req,res)=>{ 
    return res.render("index.html")//passar pelo motor do nunjucks
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

//uso de proxi para tentar corrigir o erro de CORs
//https://create-react-app.dev/docs/proxying-api-requests-in-development/
// app.use("/api",pkg.createProxyMiddleware({
//     target: 'http://localhost:3030',
//     changeOrigin: true,
//     })
// )


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Express server listening on port', port)
});


// app.listen(3000,()=>{
//     console.log("API Start!")
// })

