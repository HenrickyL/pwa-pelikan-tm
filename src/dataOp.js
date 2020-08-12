// const fetch = require("../../node_modules/node-fetch/browser")
// import * as fetch from "../../node_modules/node-fetch/lib/index.mjs"
import fetch from "node-fetch"
import * as fs from 'fs'
let result =null
fetch.fetch
let _link = "http://portal.greenmilesoftware.com/get_resources_since"

async function fetchData( link=_link,_timeout=10000, _maxTimeout=30000){
    try{
        let init = {
            method: "GET",
            headers: {
                 'content-Type':'application/json'
            },
            mode: 'no-cors',
            cache: 'default', //"default", "no-store", "reload", "no-cache", "force-cache", or "only-if-cached"
            timeout: _timeout
         }
        const res = await fetch(link, init)
        const  json  =  await res.json()
        await fs.writeFileSync(title+'.json',JSON.stringify(json[0]))
        return json
    }catch(err){
        console.log(err)
        // if(_timeout <= _maxTimeout)
            // fetchData(link,parseInt(_timeout*1.5),_maxTimeout)
    }
}


export async function saveData(dataRes,title="data"){
    try{
        await fs.writeFileSync('src/'+title+'.json',JSON.stringify(dataRes))
    console.log("data salved!")
    }catch(err){
        console.log(err)
    }
}
const dataOp ={fetchData, saveData}

export default dataOp






