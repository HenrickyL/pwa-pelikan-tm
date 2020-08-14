import header from "./header.js"
let btInput = null
window.addEventListener("load",()=>{
    header.loadButons()
    header.activateButtons()  
    
    btInput = document.querySelector("input")
    btInput.addEventListener("keyup",(event)=>{
        if(event.key === "Enter"){
            window.location = "/search="+event.target.value+"/0"
        }
        console.log("input Loaded!")
    })

    
    let btSearch = document.querySelector(".bt-search")
    btSearch.addEventListener("click",()=>{
        window.location = "/search="+btInput.value+"/0"
        console.log("brSearch loaded")
    })



    registerSW()
    console.log("<Page Loaded!>")

})


async function registerSW(){
    if('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register("/sw.js")
        }catch(e){
            console.log("SW registration failed")
        }
    }
}