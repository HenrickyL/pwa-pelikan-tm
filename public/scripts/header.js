let btReturn = null
let btOptions = null
let btBack = null
let btNext  = null

export function loadButons(){
    btReturn = document.querySelector(".bt-return")
    btOptions = document.querySelector(".bt-options")
    btBack =document.querySelector(".bt-back")
    btNext =document.querySelector(".bt-next")
    console.log("Loaded buttons!")
}
export function activateButtons(){
    btReturn.addEventListener("click",()=>{
        window.location = "/"
    })
    btOptions.addEventListener("click",()=>{
        // window.location = "/search"
        console.log("Options Clicked")
    })
    /////////////////////////////////////
    let url = window.location.href
    let aux = url.split('/')
    let page = Number(aux[aux.length-1])
    btBack.addEventListener("click",()=>{
        if( (page-20) >= 0 )
            window.location = url.slice(0,url.length-String(page).length)+(page-20)
        else
        window.location = url.slice(0,url.length-String(page).length)+0
    })
    
    btNext.addEventListener("click",()=>{
        
        window.location = url.slice(0,url.length - String(page).length)+(page+20)
    })
    
    

    console.log("activated buttons")
}

function urlAdjust(url){
    
}

const header = {loadButons,activateButtons}

export default header