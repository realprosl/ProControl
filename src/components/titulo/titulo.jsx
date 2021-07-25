import React,{useState , useEffect} from 'react';
import {generateTitle} from '../../assets/generateTitle';
import {handleBuscador} from '../../handles/handleBucador';
import {handleReset} from '../../handles/handleReset';
import {handleBuscadorSubmit} from '../../handles/handleBuscadorSubmit';
import {getAjax} from '../../assets/getAjax';
import {PORT_BD} from '../../constantes';
import {styles} from './styles.js';

export function Titulo(props){

    const name = 'titulo';

    console.log('rederizando ------- titulo');
    const {
            obras,
            setObras , 
            staticObras, 
            baseDatos ,
            setSumatorio ,
            sumatorio ,
            setPropertySumario,
            propertySumario,
            setTotalSumatorio,
            setPropiedad,
        } = props;


   
    return (
        <tr className={`tr-titulo-crud`}>
                    
            {generateTitle(props,setPropiedad,name)}
            <th className="item vacio">

            </th>
        <style>{styles}</style>
        </tr>


    );
};

