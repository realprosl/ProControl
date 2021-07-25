import {filterDate} from '../assets/filterDate';

export const handleBuscadorSubmit = (e,objeto,propiedad,callback)=>{

    let valor = e.target.parentNode.firstChild.value;

    console.log(valor);
    
    if(propiedad === 'fecha'){
        callback(filterDate(valor,objeto))

    }
    
}