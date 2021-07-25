import {getFormData} from '../assets/getFormData';
import {putAjax} from '../assets/putAjax';
import { PORT_BD } from '../constantes';

export const handleEditar = (e,tabla,callback)=>{
    // obtengo objeto del los valores modificados
   const body =  getFormData(e,2,1);
   console.log('body==>',body);
    putAjax(`${PORT_BD}/put/${tabla}`,body,callback);
}