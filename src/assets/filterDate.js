

export const filterDate = (string,objeto)=>{

    var fechaInicio ;
    var fechaFinal ;
if(typeof string === 'string'){
    // extraer datos del string
    if(string[0] === '%'){
        console.log('Es un input de busqueda');

        // quito el puntero de filtrado
        string = string.slice(1);

        //separo los valores de filtrado en una array 
        let array = string.split('?');
        console.log(array);
        fechaInicio = new Date(array[0]);
        fechaFinal = new Date(array[1]);

        console.log(fechaInicio , fechaFinal)
    }}else if(typeof string === 'object'){
        
        fechaInicio = string.fechaInicio;
        fechaFinal = string.fechaFinal
    }
    
// comparar los datos del objeto 

    let newObjeto = objeto.filter(item=>new Date(item.fecha).getTime() >= fechaInicio.getTime() && new Date(item.fecha).getTime() <= fechaFinal.getTime() )
 
    return (newObjeto);
}

