export async function getAjax(url,callback){
    try{
        let res = await fetch(url);
        let data = await res.json();
        if(data) console.log('Datos obtenidos corectamente,cantidad de posiciones =>',data.length);
        callback(data);

    }catch(e){console.error(e);}

}
