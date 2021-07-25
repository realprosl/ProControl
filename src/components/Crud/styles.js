import {CSS} from '../../assets/CSS.js';
import {color1,color2,color3,color4 ,color5,colorFondo} from '../../constantes.js';





export const styles = CSS({

    component : 'crud',
    class_container:{
        maxHeight:'280px',
        overflow:'auto',
    },
    class_table : {
        width : '100%',
        borderCollapse: 'collapse',
        borderBottom: '1px solid black',
        borderLeft: '1px solid black',
    },
    class_trTitulo:{
        position:'sticky',
        top:'0px',
        zIndex:'800',
    },
    class_item:{
        borderStyle: 'none',
        backgroundColor:'transparent',
        position: 'relative',
        color:color2,
    },
    class_botonera:{
        display:'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:colorFondo,
        border: '1px solid '+ colorFondo, 
    },
    class_btnEditar:{
        cursor: 'pointer',
        color: color2,
        paddingLeft:'10px',
        paddingRight:'10px',
        backgroundColor:color3,
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
        hover:{
            backgroundColor:color4,
        }
    },
    class_btnBorrar:{
        cursor: 'pointer',
        color: color2,
        paddingLeft:'10px',
        paddingRight:'10px',
        backgroundColor:color3,
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
        hover:{
            backgroundColor:color4,
        }
    },
    class_tr:{
        backgroundColor: color1,
        nthChild_even:{
            backgroundColor:color5,
        },
        hover:{
            borderBottom : '1px solid'+ color3,
            borderTop : '1px solid'+ color3,
        }
    },
    class_td:{
         hover:{
                backgroundColor:color4,
            }
        
    },
    class_louder:{
        marginLeft:'50%',
        marginTop:'50px',
    },
    class_labelInput:{
        display:'none',
    },
  
    // media
    media_maxWidth_600px:{

        class_botonera:{
            justifyContent: 'spaceBetween'
        },
        class_tr:{
            display : 'flex',
            flexDirection : 'column',
            width : '100%',
            margin:'0px 0px 1px 0px',
            backgroundColor:'white',
        },
        class_td:{
            display: 'flex',
            flexDirection : 'rowReverse',
            flexWrap : 'nowrap',
            justifyContent: 'space-around',
            width : '100%',
        },
        class_trTitulo:{
            display : 'none',
        },
        class_item:{
            width:'70%',
            paddingLeft:'30%',
            boxSizing: 'border-box',
        
        },
        class_btnEditar:{
            display:'flex',
            width : '45%',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '10px 0px 10px 0px',
            paddingLeft:'0px',
            paddingRight:'0px',
        },
        class_btnBorrar:{
            display:'flex',
            width : '45%',
            alignItems: 'center',
            justifyContent: 'center', 
            margin: '10px 0px 10px 0px',
            paddingLeft:'0px',
            paddingRight:'0px',
        },
        class_louder:{
            marginLeft:'40%'
        },
        class_labelInput:{
            display:'flex',
            minWidth:'100px',
        },
        class_tr:{
            backgroundColor: color1,
        }
    }
})