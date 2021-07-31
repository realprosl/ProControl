

export const marcarIcono = (baseDatos)=>{

    let listaBtn = document.body.querySelector('.container-btn-menu').childNodes;

    if(window.screen.width < 600){    listaBtn.forEach(item=>{
                                        if(item.getAttribute('name') != undefined){
                                            if(item.getAttribute('name') === baseDatos){
                                                item.style.borderBottom = '1px solid white';

                                            }else{
                                                item.style.borderBottom = 'none'
                                            }
                                        }
    })}

}