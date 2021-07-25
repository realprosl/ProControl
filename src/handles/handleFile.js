import {postAjax} from '../assets/postAjax.js';
import {PORT_BD} from '../constantes.js';

export const handleFile = async(e,baseDatos)=>{

  

 if(e.target.files && e.target.files[0]){

    let nameFile = e.target.files[0].name;
    
    if(nameFile.includes('json')){

        let file = e.target.files[0];
        let readFile = new FileReader();
        readFile.readAsDataURL(file);

        readFile.onload = async()=>{
            const res = await fetch(readFile.result);
            const resData = await res.json();
            console.log(resData);
            let respuesta = window.confirm('Esta seguro que quieres subir el archivo')
            if(respuesta){
                console.log('Grabando en la base :',baseDatos.baseDatos);
                resData.forEach(item=>{
                    if(item.id)delete item.id;
                    postAjax(`${PORT_BD}/post/${baseDatos.baseDatos}`,item,console.log);
                })
            }
        }
    }else{
        console.log('tiene que ser un json');
    }

 }
 

}