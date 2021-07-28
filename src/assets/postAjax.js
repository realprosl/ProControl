export async function postAjax(url,data ,callback) {
    console.log(data);
    console.log(callback);
    const objectAjax = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
    }
    try{
        let res = await fetch(url,objectAjax);
        let resData = await res.json();
        callback(resData.reverse());
    }
    catch(e){console.error(e)}


}