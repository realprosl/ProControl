import {CSS} from '../../assets/CSS.js';
import {color1,color2,color3,color4,color5 , colorFondo} from '../../constantes.js';

export const styles = CSS({

    component:'filtros',

    class_fondo:{
        position: 'absolute',
        zIndex:'900',
        top:'0px',
        left:'0px',
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(6px)',

    },
    class_input:{
        backgroundColor: color1,
        color: color2,
        borderStyle: 'none',
        height:'21px' ,
        hover:{
            backgroundColor:color4,
        }
    },
    class_btnSalir:{
        backgroundColor: color3,
        color:color2,
        width: '30%',
        margin: '20px 0px 0px 0px',
        padding: '2px',
        textAlign: 'center',
        cursor:'pointer',
        borderStyle: 'none',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
        hover:{
            backgroundColor:color4,
        }
    },
    class_btnEnviar:{
        backgroundColor: color3,
        color:color2,
        width: '30%',
        margin: '20px 0px 0px 10px',
        padding: '2px',
        textAlign: 'center',
        cursor:'pointer',
        borderStyle: 'none',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
        hover:{
            backgroundColor:color4,
        }
    },
    class_container:{
        width:'50%',
        height:'50%',
        backgroundImage:colorFondo,
        overflow:'auto',
        borderRadius : '5px',
        border:'1px solid '+ color3,
    },
    class_body:{
        display: 'flex',
        flexDirection:'column',
        padding:'10px 40px 10px 40px',
        boxSizing: 'border-box',
        color:color2,
    },
    media_maxWidth_600px :{

        class_body:{
            justifyContent: 'center',
            width: '100%',
            height: '100%',
        },
        class_container:{
            width: '100%',
            height: '100%',
        },

    }

})