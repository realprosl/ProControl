



export const orderObject = (objectProperties,objectOrigen)=>{

    let objectDestino = [];
    objectOrigen.map(object=>{
        let bus ={};
        for(let item of objectProperties){
            console.log(item);
            bus[item] = object[item]
        }
        objectDestino.push(bus)
})
return objectDestino;
}






