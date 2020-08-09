// import dl from "./loadData.js"

let btMonitor = null
let btSearch = null
let conectStatus = null
let data = null
window.addEventListener("load",()=>{
    loadItems()
    activateButtons()
    data=doFetch()
    // teste()
    
    console.log("<Page Loaded!>")

})

///////////////////////////

async function doFetch(){
    try{
        let link = "https://api.test.datacite.org/providers/caltech/dois?page[size]=50000"
        // let link = "http://portal.greenmilesoftware.com/get_resources_since"
        
        // var myHeaders = new Headers();
        // var myInit = { method: 'GET',
        //        headers: myHeaders,
        //        mode: 'cors',
        //        cache: 'default' };
        const res = await fetch(link/*,myInit*/)
        const json = await res.json()
        console.log("fetched")
        return json
    }catch(err){
        console.log(err)
    }
    
}



function teste(){
    var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = ()=>{
    //     if(this.readState==4 && this.status == 200){
    //         console.log(this)
    //     }
    // }
    xhttp.open("GET","http://portal.greenmilesoftware.com/get_resources_since",false)
    xhttp.send(null)
    xhttp.responseType  = "json"
    return xhttp.responseText
}   







function loadItems(){
    btMonitor = document.querySelector(".button-main")
    btSearch = document.querySelector(".button-sec")
    conectStatus = document.querySelector("#conectivity")
    console.log("Loaded buttons!")
}
function activateButtons(){
    btMonitor.addEventListener("click",()=>{
        window.location = "/monitor"
    })
    btSearch.addEventListener("click",()=>{
        window.location = "/search"
    })
    setInterval(()=>{
        if(navigator.onLine){
            // conectStatus.childNodes[1].textContent = "online"
            conectStatus.childNodes[1].classList.remove("disconected")
            conectStatus.childNodes[1].classList.add("conected")
        }else{
            // conectStatus.childNodes[1].textContent = "offline"
            conectStatus.childNodes[1].classList.remove("conected")
            conectStatus.childNodes[1].classList.add("disconected")

        }
        // console.log("cheked!")
    }, 2000)
    console.log("activated buttons")
}
