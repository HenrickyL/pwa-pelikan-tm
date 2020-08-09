// let dataSet = null


export function doFetch(){
    const res = await fetch("http://portal.greenmilesoftware.com/get_resources_since")
    const json = await res.json()
    console.log(json)
    return json
}

// const ld = {doFetch}


export default {doFetch}