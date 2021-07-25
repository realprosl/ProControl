import {getFormData} from '../assets/getFormData.js';
import {resetFormulario} from '../assets/resetFormulario.js';
import {getFiltradoObjeto} from '../assets/getFiltradoObjeto.js';

export const handleFiltrar = (e ,props) =>{
    const {setOnFiltros , onFiltros ,obras ,setObras} = props;
    e.preventDefault();
    const res = getFormData(e,2);
    console.log(res);
    resetFormulario(e,2);
    setOnFiltros(!onFiltros);

    setObras(getFiltradoObjeto(res,obras));

}