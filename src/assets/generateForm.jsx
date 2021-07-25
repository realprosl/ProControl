 import React from "react";
 import {getDateNow} from './getDateNow'

 export const generateForm = (objeto,name)=>{
     console.log(objeto);
    let properties = Object.keys(objeto[0])
    console.log(properties);
    return (properties.map(property=>{
        if(property === '_id'){
            return  <input key={`${property}_obras`}  className={`item-${name}`} placeholder={property} name={property} hidden="true"></input>
        }else if(property != 'id'){
            if(property === 'fecha'){
               return <input  key={`${property}_obras`} type="date" className={`item-${name}`} placeholder={property} name={property} defaultValue={getDateNow(1)}></input>
            }else{
                return  <input key={`${property}_obras`} className={`item-${name}`} placeholder={property} name={property}></input>
            }
        }
    }))
    }
 