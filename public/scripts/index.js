
import dataOp from "./dataOp.js"
let btMonitor = null
let btSearch = null
let conectStatus = null
let dataSet = null
let link = "http://portal.greenmilesoftware.com/get_resources_since"

window.addEventListener("load",()=>{
    loadItems()
    activateButtons()
    dataSet = dataOp.fetchData()
    
    console.log("<Page Loaded!>")

})





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
