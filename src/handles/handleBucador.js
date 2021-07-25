

export const handleBuscador =(e,setBusqueda,objeto, propiedad,callback)=>{
    
    const valor = e.target.value;
    setBusqueda(valor);
    console.log('valor==>',valor);
    console.log('objeto==>',objeto);
    console.log('propiedad==>',propiedad);
    if(propiedad != 'fecha'){
        let resultadoBusqueda ;
        // valido si hay que buscar un numero o un string
        if(isNaN(valor)){
            resultadoBusqueda = objeto.filter(objeto =>objeto[propiedad].toLowerCase().includes(valor.toLowerCase()))
        }else if(typeof (parseInt(valor)) === 'number'){
            resultadoBusqueda = objeto.filter(objeto =>{
                console.log(objeto[propiedad]);
                return objeto[propiedad].toString().includes(valor)
            } )
        }
    
        
        console.log(resultadoBusqueda);
        callback(resultadoBusqueda);  
    }
} 