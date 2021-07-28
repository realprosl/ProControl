

export const marcarIcono = (baseDatos)=>{

    const options = {

        obras:()=>{
            document.body.querySelector('.container-btn-menu').childNodes[0].style.borderBottom='1px solid white';
            document.body.querySelector('.container-btn-menu').childNodes[1].style.borderBottom='none';
            document.body.querySelector('.container-btn-menu').childNodes[2].style.borderBottom='none';

        },
        materiales:()=>{
            document.body.querySelector('.container-btn-menu').childNodes[1].style.borderBottom='1px solid white';
            document.body.querySelector('.container-btn-menu').childNodes[0].style.borderBottom='none';
            document.body.querySelector('.container-btn-menu').childNodes[2].style.borderBottom='none';
        },
        gastosPersonales:()=>{
            document.body.querySelector('.container-btn-menu').childNodes[2].style.borderBottom='1px solid white';
            document.body.querySelector('.container-btn-menu').childNodes[0].style.borderBottom='none';
            document.body.querySelector('.container-btn-menu').childNodes[1].style.borderBottom='none';

        },
    }

    if(window.screen.width < 600){
        options[baseDatos]()
    }

}