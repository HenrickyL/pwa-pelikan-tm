import header from "./header.js"

window.addEventListener("load",()=>{
    header.loadButons()
    header.activateButtons()  
    
    let btInput = document.querySelector("input")
    btInput = addEventListener("keyup",(event)=>{
        if(event.key === "Enter"){
            window.location = "/search="+event.target.value+"/0"
        }
        console.log("input Loaded!")
    })
    
    document.querySelector(".bt-search").addEventListener("click",()=>{
        window.location = "/search="+btInput.value+"/0"
    })




    console.log("<Page Loaded!>")

})

