let btReturn = null
let btOptions = null
let btBack = null
let btNext  = null

export function loadButons(){
    btReturn = document.querySelector(".bt-return")
    btOptions = document.querySelector(".bt-options")
    // btBack =document.querySelector(".bt-back")
    // btNext =document.querySelector(".bt-next")
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
    console.log("activated buttons")




}

const header = {loadButons,activateButtons}

export default header