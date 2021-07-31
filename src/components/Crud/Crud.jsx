// importaciones
import react,{useEffect , useState} from 'react';
import {Titulo} from '../titulo/titulo';
import { deleteAjax } from '../../assets/deleteAjax';
import {generateItemCrud} from '../../assets/generateItemCrud';
import {calcularTotalSumatorio} from '../../assets/calcularTotalSumatorio';
import {handleEditar} from '../../handles/handleEditar';
import {PORT_BD} from '../../constantes';
import {ReactComponent as  Louder} from '../../svg/louder.svg';
import {ReactComponent as IconoEditar} from '../../svg/editar.svg';
import {ReactComponent as IconoBorrar} from '../../svg/borrar.svg';
import {color1 ,color2,color3,color4} from '../../constantes.js';
import {styles} from './styles.js';



 export function Crud (props){
    const name = 'crud';
    const {
            obras , 
            setObras ,
            staticObras ,
            baseDatos ,
            setSumatorio ,
            sumatorio,
            setPropertySumario,
            setTotalSumatorio,
            propertySumario,
            setBusqueda,
            setPropiedad
        } = props;
    // constantes y variables locales
useEffect(()=>{
    calcularTotalSumatorio(props)
})
    // cuerpo html
    return (
        <div className={`container-${name}`}>
        <table className={`table-${name}`} >
        
        <Titulo 
            className="" 
            obras={obras} 
            setObras={setObras} 
            staticObras={staticObras}
            baseDatos={baseDatos}
            setSumatorio={setSumatorio}
            sumatorio={sumatorio}
            setPropertySumario={setPropertySumario}
            setTotalSumatorio={setTotalSumatorio}
            setPropiedad={setPropiedad}
            setBusqueda={setBusqueda}>
        </Titulo>         
        
        {(!obras) ? <Louder className="Louder"></Louder>:
        (obras.length <= 0) ? <Louder className={`louder-${name}`}></Louder> : 
        obras.map((obra)=>{
            return (<tr key ={obra._id} className={`tr-${name}`}>
                    {generateItemCrud(obra ,name)}
                    <td className={`botonera-${name}`}> 
                            <div 
                                className={`btn-${name}`}
                                name={obra._id}
                                onClick={(e)=>{handleEditar(e,baseDatos,setObras)}}>
                                <IconoEditar style={{width:"10px",height:"10px",fill:color2}}></IconoEditar>
                                <label className={`btn-label-${name}`}>Editar</label>
                            </div>

                            <div 
                                className={`btn-${name}`}  
                                name={obra._id} 
                                onClick={(e)=>deleteAjax(`${PORT_BD}/delete`,obra._id,baseDatos,setObras)}>
                                <IconoBorrar style={{width:"10px",height:"10px",fill:color2}}></IconoBorrar>
                                <label className={`btn-label-${name}`}>Borrar</label>
                            </div>
                        </td>
                       
                    </tr>
                    )
        })}
        </table>
        <style>{styles}</style>
        </div>
    )
}