import {CSS} from '../../assets/CSS.js';
import {color1,color2,color3, color4} from '../../constantes.js';

export const styles = CSS({

    component : 'menu',
    class_iconos:{
        fill:color2,
    },
    class_container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'transparent',
        padding: '20px 0px 20px 0px',
        boxSizing: 'border-box',
    },
    class_containerBtn:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow:'1',
        justifyContent: 'flexStart',
        alignItems: 'center',
        boxSizing: 'border-box',
        width: '60%',
        height: '100%',
        marginRight: '20px'
    },
    class_btn:{
        width:'35px',
        height:'35px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color3,
        padding:'5px',
        margin:'2px 10px 2px 2px',
        transition: 'all 0.3s',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
        hover:{
            transform:'scale(1.2)',
        },
    },
    class_containerBuscador:{
        display: 'flex',
        alignItems: 'center',
        flexGrow:'2',
        position:'relative',
        overflow:'hidden',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',


    },
    class_buscador:{
        width: '100%',
        height: '21px',
        color:color2,
        backgroundColor:color1,
        borderStyle: 'none',
        hover:{
            backgroundColor:color4,
        }
    },
    class_resetBtn:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right:'100px',
        boxSizing: 'border-box',
        padding:'2px',
        width:'20px',
        height: '20px',
        backgroundColor: 'transparent',
        color: 'red',
        border:'1px solid red',
        visibility: 'hidden'


    },
    class_filterBtn:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right:'80px',
        boxSizing: 'border-box',
        padding:'2px',
        width:'20px',
        height: '20px',
        backgroundColor: 'transparent',
        color: 'blue',
        border:'1px solid blue',
        visibility: 'hidden'

    },
    class_select:{
        width:'80px',
        height:'23px',
        color:color2,
        backgroundColor: color1,
        borderStyle: 'none',
        hover:{
            backgroundColor:color4,
        }
    },
    // media
    media_maxWidth_600px:{

        class_container:{
            flexDirection: 'column',
            justifyContent: 'center',
            justifyItems: 'center',
            padding:'0px',
            marginBottom:'2px',
        },
        class_containerBuscador:{
            display: 'flex',
            justifyContent: 'center',
            width : '98%',
            height:'35px',
            margin:'0px 10px 5px 10px',
        },
        class_containerBtn :{
            marginRight:'0px',
            marginBottom: '2px',
            width : '100%',
            justifyContent: 'spaceBetween',

            
        },
        class_btn:{
            width:'35px',
            height:'35px',
            boxSizing: 'border-box',
            margin: '0px',
            marginTop: '10px',
            boxShadow: 'none',
            backgroundColor: 'transparent',
            overflow: 'hidden',
            nthChild_1:{
                marginLeft: '10px',
            },
            nthChild_3:{
                marginRight: '10px',
            },
            hover:{
                transform:'none',
            }
        },
        class_select:{
            width:'80px',
            height:'35px',
        },
        class_buscador:{
            height:'35px'
        },
        class_label:{
            display:'none',
        },
        class_iconos:{
            width:'30px',
            height:'30px',
        }

    }
})

