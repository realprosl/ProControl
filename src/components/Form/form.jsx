
import React,{useEffect} from 'react';
import {handleEnviarForm} from '../../handles/handleEnviarForm'
import {handleAtras} from '../../handles/handleAtras'
import {generateForm} from '../../assets/generateForm'
import {ReactComponent as IconoEnviar} from '../../svg/enviar.svg';
import {ReactComponent as IconoAtras} from '../../svg/atras.svg';
import {color2} from '../../constantes.js';
import {styles} from './styles.js';



export function Form (props){
    const name = 'form';
    const {on,changeState , setObras ,obras , staticObras,baseDatos} = props;

    
    if(on) {
        return (
            <form className={`container-${name}`}>
            <h3 style={{color:color2}}>Nuevo registro</h3>
            {generateForm(staticObras,name)}
            <div className={`botonera-${name}`}>
            <div 
                className={`btn-enviar-${name}`} 
                onClick={(e)=>handleEnviarForm(e,changeState,baseDatos,setObras)}>
                Enviar
            </div>

            <div
                className={`btn-atras-${name}`} 
                onClick={(e)=>handleAtras(e,changeState)}>
                <IconoAtras style={{width:"10px",height:"10px",fill:color2}}></IconoAtras>
            </div>

            </div>
            <style>{styles}</style>
            </form>
        )
    }else{
        return <></>
    }

}