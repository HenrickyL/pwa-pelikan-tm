//querySelector com callback
function qSFunction(obj,action,callback){
    const OBJ = document.querySelector("obj")
    OBJ.addEventListener(action,callback)
}

function sortBy(obj, by ){

}

export function searchByValue(objs,searchFor){
    
    let searchValue = searchFor.trim().toLowerCase()
    let match = objs.filter(obj=>{
        if(searchValue.length>0){
            return obj.resource.value.toLowerCase().includes(searchValue)
        }return false
    })
    return match

}

export default {searchByValue}