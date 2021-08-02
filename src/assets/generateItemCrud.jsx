import React from 'react';

const isParOInpar = (contador)=>{
 return (contador%2 == 0) ? 'par' : 'inpar';
}

export const generateItemCrud = (obra , name)=>{
    let resultado = [];
    let contador = 0;
    for(let item in obra){

        if(typeof item === 'number' && item != '_id'){

            resultado.push(<td  className={`td-${name} ${isParOInpar(contador)}-${name}`} name='input'>
                                <input type="number" className={`item-${name}`} name={item} defaultValue={obra[item]}>
                                </input>
                                <label for = {item} className={`label-input-${name}`}>{item+' :'}</label> 
                            </td>)

        }else if(typeof item === 'string'  && item != '_id'){

            resultado.push(<td className={`td-${name} ${isParOInpar(contador)}-${name}`}  name='input'>
                                <input type="text" className={`item-${name}`} name={item} defaultValue={obra[item]}>
                                </input>
                                <label for = {item} className={`label-input-${name}`}>{item+' :'}</label>
                            </td>)
        }else if(item === '_id'){
            
            resultado.push(<td className={`td-hidden-${name} ${isParOInpar(contador)}-${name}`}  name='input' hidden={true}>
                                <input type="text" className={`item-${name}`} name={item} defaultValue={obra[item]}>
                                </input>
                                <label for = {item} className={`label-input-${name}`}>{item+' :'}</label>  
                            </td>)
        }
        contador++;
    }
    return resultado;

}