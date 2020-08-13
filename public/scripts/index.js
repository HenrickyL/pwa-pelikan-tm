
// import dataOp from "../../src/dataOp.js"
let btMonitor = null
let btSearch = null
let conectStatus = null
let bgLoad = null


window.addEventListener("load",()=>{
    loadItems()
    activateButtons()
    registerSW()
    console.log("<Page Loaded!>")

})





function loadItems(){
    btMonitor = document.querySelector(".button-main")
    btSearch = document.querySelector(".button-sec")
    conectStatus = document.querySelector("#conectivity")
    bgLoad = document.getElementById("bg")
    // console.log(bgLoad)
    console.log("Loaded buttons!")
}
function activateButtons(){

    btMonitor.addEventListener("click",()=>{
        // console.log(bgLoad)
        setTimeout(()=>{
            window.location = "/monitor/filter=language_id/0"
        },1000)
        bgLoad.classList.remove("hide")
        
        
    })
    btSearch.addEventListener("click",()=>{
        setTimeout(()=>{
            window.location = "/search=/0"
        },1000)
        bgLoad.classList.remove("hide")
       
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



async function registerSW(){
    if('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register("./sw.js")
        }catch(e){
            console.log("SW registration failed")
        }
    }
}
