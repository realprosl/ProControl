import React ,{useState} from 'react';
import {getAjax} from '../assets/getAjax';
import {agruparObjetos} from '../assets/agruparObjetos';
import {handleChekBox} from '../handles/handleChekBox';
import {PORT_BD} from '../constantes';
import {ReactComponent as IconoSuma} from '../svg/suma.svg';
import { handleSumario } from '../handles/handleSumario';

export const generateTitle = (props,setPropiedad,name)=>{
const {
        obras,
        setObras , 
        staticObras ,
        baseDatos ,
        setSumatorio ,
        sumatorio ,
        setPropertySumario,
        propertySumario,
        setTotalSumatorio
    } = props;

let colorSumatiro = (sumatorio) ? 'red' : 'initial';

if(staticObras != undefined){
    let properties = Object.keys(staticObras[0]);
    return (properties.map(property=>{
        if(property === '_id'){
            return  (
            
                <th 
                className={`item-${name}`}
                key={`${property}_title`} 
                name ={property} 
                hidden={true}
                onClick={()=>getAjax(`${PORT_BD}/get/${baseDatos}`,setObras)}>
                {property}
                </th>
        
                
            )
        }else{
            let propertyIsString = (isNaN(staticObras[0][property]));
            return(
                <th 
                className={`item-${name}`} 
                key={`${property}_title`} 
                name ={property} 
                data-string={propertyIsString}
                onClick={(e)=>agruparObjetos(obras,e.target.getAttribute('name'),setObras)}>
                {property}

                <button
                    hidden={propertyIsString}
                    style={{
                            margin:0,
                            padding:0,
                            position:"absolute",
                            right:"3px",
                            bottom:"2.5px",
                            }}
                    onClick={(e)=>handleSumario(props,property)}>
                    <IconoSuma
                        style={{width:"10px",height:"10px" , fill:colorSumatiro}}>
                    </IconoSuma>
                </button>
            </th>
            )
        }
    
    
    }))
}else {return <span>Error al cargar staticObras</span>}



}