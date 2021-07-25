import {styles} from './styles.js';
import {generateItemFiltros} from '../../assets/generateItemFiltros.js';
import {handleFiltrar} from '../../handles/handleFiltrar.js';

export const Filtros = (props)=>{

    const name = 'filtros'
    const {
        setOnFiltros , 
        onFiltros,
        staticObras,
        setObras,
        obras} = props;


    return(
        <div className={`fondo-${name}`}>
            <div className={`container-${name}`}>
                <form className={`body-${name}`}>
                    {generateItemFiltros(props,name)}
                    <div className={`botonera-${name}`}>
                    <button 
                        className={`btn-salir-${name}`}
                        onClick={()=>setOnFiltros(!onFiltros)}>
                        Salir
                    </button>

                    <button 
                        className={`btn-enviar-${name}`}
                        onClick={(e)=>{handleFiltrar(e,props)}}>
                        Enviar
                    </button>
                    </div>
                </form>
            <style>{styles}</style>
        </div>
        </div>

    )
}