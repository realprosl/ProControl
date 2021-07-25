
export const putAjax = async (url,object,callback)=>{

    const objectHeaders = { 
                            method: 'PUT',
                            headers: {'content-type': 'application/json'},
                            body: JSON.stringify(object)}
    try{
        let res = await fetch(url,objectHeaders);
        let putRes = await res.json();
        console.log(putRes);
        callback(putRes);
    }catch(e){console.error(e)}

}