import {CSS} from '../../assets/CSS.js';
import { color1,color2, color3,color4, colorFondo } from '../../constantes.js';

export const styles = CSS({
    component:'app',
    class_container:{
        width:'90%',
        overflow:'auto',
        marginTop:'30px',
        height:'90%',
        padding:'20px',
        boxSizing:'border-box',
        backgroundImage: colorFondo,
        borderRadius:'5px',
        border:'1px solid'+ color3,
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;',
    },
    class_tittle:{
        display:'flex',
        alignItems: 'center',

    },
    class_containerImg:{
        position:'relative',
        width:'30px',
        height:'30px',
        backgroundColor:'white',
        borderRadius:'50%',
        padding:'2px',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',

    },
    class_img:{
        position:'absolute',
        width:'29px',
        height:'29px',
        top:'-2px',
        left:'4px',
    },
    class_button:{
        backgroundColor: color3,
        color:color2,
        width: '30%',
        margin: '10px 0px 0px 1px',
        padding: '2px',
        textAlign: 'center',
        cursor:'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
        hover:{
            backgroundColor:color4,
        },
    },
    class_footer:{
        display:'flex',
        flexDirection: 'row',
    },
    class_iconoButton:{
        width:"10px",
        height:"10px",
        marginRight:"10px",
        fill:color2
    },
    media_maxWidth_600px:{
        class_container:{

            width:'100%',
            height:'100%',
            margin:'0px',
            padding :'0px',
            position: 'relative',
            borderRadius: '0px',
        },
        class_tittle:{
            display:'none',
        },
        class_footer:{
            display:'flex',
            position:'fixed',
            top:'93%',
            left:'-1px',
            width: '100%',
            height: '50px',
            backgroundImage:colorFondo,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding:'0px',
            borderTop:'1px solid'+color1,
            boxShadow: '0px 0px 10px 1px rgb(0 0 0 / 40%)',
        },
        class_button:{
            backgroundColor:'transparent',
            boxShadow: 'none',
            margin:'0px',
            hover:{
                backgroundColor:'transparent',
            }
        },
        class_textoButton:{
            display:'none',
        },
        class_iconoButton:{
            width:'25px',
            height:'25px',
        }

    }
})

