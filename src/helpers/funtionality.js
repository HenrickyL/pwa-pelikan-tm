export function searchByValue(objs,searchFor){
    
    let searchValue = searchFor.trim().toLowerCase()
    let match = objs.filter(obj=>{
        if(searchValue.length>0){
            return obj.resource.value.toLowerCase().includes(searchValue)
        }return false
    })
    return match
}

export function doFind(name,objs,idName=null){ //retorna bool ou index
    let found = []
    let index =0

    if(idName!==null){
        found = objs.find(obj => {
            index++
            return obj.resource[idName] === name
            })
        return index
    }else{
        found = objs.find(obj => {
        return obj === name
        })
        return found
    }
}

export function filterUniqueId(objs, idName ){
    let unique = []
    let namesId = objs.map(obj=>obj.resource[idName]) //crio uma lista com todos os nomes
    let namesSorted = namesId.sort()
    let aux=namesSorted.filter(name=>{
        if( doFind(name,unique)){
            return false
        }else {
            unique.push(name)
            return true
        }
    })
    return unique

}

export function sortbyId(objs, idName){
    let sorted = []
    let rest = [...objs]
    let aux = []
    while(sorted.length < objs.length){
        let part =objs.filter(obj=>{
            if(obj.resource[idName] === rest[0].resource[idName]){
                return true
            }else{
                aux.push(obj)
                return 0;
            }
        })
        sorted = [...sorted,...part]
        rest = [...aux]
    }

    let idNameUnique = filterUniqueId(objs,idName)
    // console.log(sorted.length," - ",idNameUnique.length)
    return [sorted,idNameUnique] //retorna ordenado e quantos diferentes tem
}


export default {searchByValue,sortbyId,doFind}