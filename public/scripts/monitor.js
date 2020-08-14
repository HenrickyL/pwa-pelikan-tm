
import header from "./header.js"

window.addEventListener("load",()=>{
    header.loadButons()
    header.activateButtons()
    
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