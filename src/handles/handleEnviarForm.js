import {getFormData} from '../assets/getFormData'
import {postAjax} from '../assets/postAjax'
import {resetFormulario} from '../assets/resetFormulario';
import {PORT_BD} from '../constantes';

export const handleEnviarForm = (e,changeState,tabla,callback) => {
    e.preventDefault();
    let values = getFormData(e,2);
    postAjax(`${PORT_BD}/post/${tabla}`,values,callback);
    resetFormulario(e,2);
    }
  