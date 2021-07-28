import React,{useState} from 'react';
import {createPdf} from '../../assets/createPdf';
import {PORT_BD} from '../../constantes';
import {ReactComponent as IconObras} from '../../svg/team.svg';
import {ReactComponent as IconoMateriales} from '../../svg/transporte-de-camiones-con-materiales-de-construccion.svg';
import {ReactComponent as IconoPdf} from '../../svg/file.svg';
import {ReactComponent as SubirFile} from '../../svg/upload.svg';
import {ReactComponent as GastosPersonales} from '../../svg/budget.svg';
import {styles} from './styles.js';
import {handleBuscador} from '../../handles/handleBucador.js';
import {handleReset} from '../../handles/handleReset.js';
import {handleFocusBuscador} from '../../handles/handleFocusBuscador.js';
import {generateSelect} from '../../assets/generateSelect.js';
import {handleSelect} from '../../handles/handleSelect.js';
import {handleFiltros} from '../../handles/handleFiltros.js';
import {handleFile} from '../../handles/handleFile.js';
import {Filtros} from '../../components/Filtros/Filtros.js';

export const Menu = (props)=>{

const [onFiltros , setOnFiltros] = useState(false);

const {
        baseDatos,
        setBaseDatos,
        obras,
        busqueda,
        name,
        setBusqueda,
        propiedad,
        setObras,
        setPropiedad,
        staticObras
    } = props;

    return(
        <div className={`container-${name}`}>
            <div className={`container-btn-${name}`}>
                <div
                    onClick={()=>setBaseDatos('obras')}
                    className={`btn-${name}`}
                    >
                    <IconObras className={`iconos-${name}`}></IconObras>
                </div>
                <div
                    onClick={()=>setBaseDatos('materiales')}
                    className={`btn-${name}`}
                    >
                    <IconoMateriales className={`iconos-${name}`}></IconoMateriales>
                </div>
                <div 
                    className={`btn-${name}`}
                    onClick={()=>setBaseDatos('gastosPersonales')}>
                    <GastosPersonales className={`iconos-${name}`}></GastosPersonales>
                </div>

                <div 
                    className={`btn-${name}`}
                    onClick={()=>createPdf(`${PORT_BD}/pdf/${busqueda} `,obras,busqueda)}>
                    <IconoPdf className={`iconos-${name}`}></IconoPdf>
                </div>


                    <label 
                        for="upFile"
                        className={`btn-${name} label-${name}`}>
                    <SubirFile className={`iconos-${name}`}></SubirFile>
                    </label>
                    <input 
                        type="file" 
                        id="upFile"
                        onChange={(e)=>handleFile(e,props)} 
                        style={{opacity:0,zIndex:-1}}>
                    </input>
                </div>
        
        <div 
            className={`container-buscador-${name}`}
            onFocus={(e)=>handleFocusBuscador(e)}>
        <input 
            type="text" 
            className={`buscador-${name}`}
            onChange={(e)=>handleBuscador(e,setBusqueda,obras,propiedad,setObras)}
            placeholder="Buscar.." >
        </input>
        <select 
            name="propiedades" 
            className={`select-${name}`}
            onChange={(e)=>handleSelect(e,props)}>
            {generateSelect(props)}
        </select>
        <button 
            className={`reset-btn-${name}`}
            onClick={(e)=>handleReset(e,baseDatos,setObras)}>
            X
        </button>
        <button
            className={`filter-btn-${name}`}
            onClick={(e)=>handleFiltros(e,setOnFiltros,onFiltros)}>
            f
        </button>
        </div>
        <style>{styles}</style>
        {(onFiltros)? <Filtros 
                        setOnFiltros={setOnFiltros}
                        onFiltros={onFiltros}
                        staticObras={staticObras}
                        obras={obras}
                        setObras={setObras}>
                     </Filtros> :
                     <></> }
    </div>
     
    

    )
}