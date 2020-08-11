// const fetch = require("../../node_modules/node-fetch/browser")
// import * as fetch from "../../node_modules/node-fetch/lib/index.mjs"
// const fetch = require("node-fetch");
// import * as fs from 'fs'
let result =null
fetch.fetch
let _link = "http://portal.greenmilesoftware.com/get_resources_since"

async function fetchData( link=_link,_timeout=5000, _maxTimeout=30000){
    let init = {
        method: "GET",
        headers: {
             'content-Type':'application/json'
        },
        mode: 'no-cors',
        cache: 'default',
        timeout: _timeout
     }
     console.log(link)
    const res = await fetch(link, init)
        // .catch(()=>{
        //     console.log("tempo excedido")
        //     if(_timeout < _maxTimeout) fetchData(link, parseInt(_timeout*1.5))
        // })
    const  json  =  await res.json()
    result = json
    console.log("load: ", json.length," datas")
    return result
}


export async function saveData(title="data"){
    await fs.writeFileSync(title+'.json',JSON.stringify(result))
    console.log("data salved!")
}
const dataOp ={fetchData, saveData}

export default dataOp






