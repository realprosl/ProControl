
export function agruparObjetos(objetos,propiedad,callback){
// creo un array con todas las propiedades existentes
let arrayPropiedades = [];
for(let objeto of objetos){
    arrayPropiedades.push(objeto[propiedad]);
}

// limpio la array de todas las repetidas
arrayPropiedades = [...new Set(arrayPropiedades)]

// agrupo el objeto por propiedades 
let resultado = []
for(let arrayPropiedad of arrayPropiedades){

for(let objeto of objetos){
    if(arrayPropiedad === objeto[propiedad]){
        resultado.push(objeto);
    }
}

}

// ejecuto el callback
  callback(resultado);  
}
