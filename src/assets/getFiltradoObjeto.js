import {filterDate} from '../assets/filterDate.js';


export const getFiltradoObjeto = (dates,obj)=>{

    console.log(obj);
    //obtengo datos por separados

    // fecha
    let date = [];
    for(let item in dates){
        if(item.includes('fecha')){
            date.push(dates[item]);
        }
    }
    date = {
        fechaInicio: new Date(date[0]),
        fechaFinal : new Date(date[1]),
    }
    obj = filterDate(date,obj);
    // los demas parametros
    let properties= Object.keys(dates)
    for(let property of properties){
        if(!property.includes('fecha')){
            obj=(obj.filter(item=>item[property].includes(dates[property])));
            }

    }
    return obj;

}