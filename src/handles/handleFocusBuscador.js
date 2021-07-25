
export const handleFocusBuscador =(e)=>{

    e.preventDefault();
    let hijos = e.target.parentNode.childNodes;
    hijos.forEach(hijo=>{
        if(hijo.tagName == 'BUTTON'){
            hijo.style.visibility = 'visible';

            setTimeout(()=>{
                hijo.style.visibility = 'hidden';

            },10000);
        }
    })
}