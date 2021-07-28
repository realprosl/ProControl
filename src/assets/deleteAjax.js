export async function deleteAjax(url,id ,tabla ,callback){
    let headers = {
                method: 'DELETE', 
                'content-type' : 'application/json'
            }
    try{
        let res = await fetch(`${url}/${id}/${tabla}`,headers);
        let resdata = await res.json();
        callback(resdata.reverse());
    }catch(e){console.error(e)}
}