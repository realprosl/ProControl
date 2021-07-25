import { PORT_BD } from "../constantes";
export const createPdf = async (url,datos,nombrePdf,callback) => {
    console.log(datos);
    const objectHeaders = {
                        method: 'POST',
                        headers: {'content-type': 'application/json'},
                        body: JSON.stringify(datos)
                    };
    try{
        
        let res = await fetch(url,objectHeaders)
        let resData = await res.text();

        console.log(resData);
        if(resData === 'ok'){
            setTimeout(()=>{
                window.location.href = `${PORT_BD}/descargar/${nombrePdf} `;
            },1500)
        }
        
    
    }catch(e){console.log(e);}
}