import {CSS} from '../../assets/CSS.js';
import { color1,color2,color3,color4 } from '../../constantes.js';

export const styles = CSS({

    component:'form',
    class_container:{
        display:'flex',
        flexDirection:'column',
    },
    class_botonera:{
        display:'flex',
        flexDirection:'row',
    },
    class_item:{
        color:color2,
        backgroundColor:color1,
        borderStyle: 'none',
        marginTop:'2px',
        height: '21px',
        hover:{
            backgroundColor:color4,
        }
    },
    class_btnEnviar:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        marginTop:'30px',
        border:'1px solid black',
        width:'150px',
        cursor:'pointer',
        margin: '10px 0px 0px 0px',
        backgroundColor: color3,
        color:color2,
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
        hover:{
            backgroundColor:color4,
        }
    },
    class_btnAtras:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        marginTop:'30px',
        border:'1px solid black',
        width:'150px',
        cursor:'pointer',
        margin: '10px 0px 0px 10px',
        backgroundColor: color3,
        color:color2,
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
        hover:{
            backgroundColor:color4,
        }

    },
    media_maxWidth_600px:{
        class_container:{
            padding:'30px',
        },
        class_item:{
            height:'35px',
            margin:'10px  0px 10px 0px',
        },
        class_botonera:{
            justifyContent:'center'
        }
    },

})