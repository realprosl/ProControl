export function getFormData(evento ,posicionesSubir=1,posicionesHijos=0){

    // obtener datos del formulario del formulario
    let $padre;
    if(posicionesSubir !== undefined){
        for(let i=0;i<posicionesSubir;i++){
            if($padre === undefined){
                $padre = evento.target.parentNode;
            }else{
                $padre = $padre.parentNode;
            }
        }
    }
    // //
    console.log($padre);
    // //
    let hijosFiltrados = [];

     let $hijos = $padre.childNodes;
     console.log('hijos==>',$hijos);
     if(posicionesHijos > 0){
         for(let hijo of $hijos){
             console.log('hijo==>',hijo);
             if(hijo.getAttribute('name') === 'input'){
                hijosFiltrados.push(hijo.firstChild);
             }
         }
     }
 
    console.log('hijosFiltrados==>',hijosFiltrados);
     if(posicionesHijos === 0){
          // filtro elementos solo input
    for(let hijo of $hijos ){
        if(hijo.tagName === 'INPUT'){
            hijosFiltrados.push(hijo)
        }
    }  
    }

    // creo un objeto de hijos input
    let values = {};
    for(let hijo in hijosFiltrados){
        let type = (hijosFiltrados[hijo].type);
        if(type === 'number'){

            values[hijosFiltrados[hijo].name] = parseInt(hijosFiltrados[hijo].value)
        }else{

            values[hijosFiltrados[hijo].name] = hijosFiltrados[hijo].value
        }
    }
    console.log(values);
    return values;
    
}