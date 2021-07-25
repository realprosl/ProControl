import {getAjax} from '../assets/getAjax';
import {PORT_BD} from '../constantes';

export const handleReset = (e,tabla,callback)=>{
    e.preventDefault();
    // borro contenido del buscador
    const padre = e.target.parentNode.querySelector('.buscador-menu').value = '';
    // hago peticion get para obtener los valores de obra del servidor 

    getAjax(`${PORT_BD}/get/${tabla}`,callback);

}