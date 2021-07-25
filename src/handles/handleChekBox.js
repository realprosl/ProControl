
export  const handleChekBox = (e,callback)=>{
    console.log(e.target.value);
    callback(e.target.getAttribute('value'));
}