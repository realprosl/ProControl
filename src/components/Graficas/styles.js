import {CSS} from '../../assets/CSS.js';
import {colorFondo,  
        color1,
        color2, 
        color3,
        color4,
        colorIngresos,
        colorGastos,
        colorBeneficiosPositivos,} from '../../constantes.js';



export const styles = CSS({

    component:'graficas',


    class_container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position:'absolute',
        top:'-30px',
        left:'-30px',
        width: '110%',
        height: '110%',
        zIndex:'1000',
        backgroundImage: colorFondo,
    },
    class_btnAtras:{
        position:'absolute',
        bottom:'40px',
        right:'100px',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        border:'1px solid black',
        width:'100px',
        height:'25px',
        cursor:'pointer',
        backgroundColor: color3,
        color:color2,
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
        hover:{
            backgroundColor:color4,
        }
    },
    class_icoAtras:{
        width: '10px',
        height: '10px',
        fill:color2,
    },
    class_containerSelect:{
        display:'flex',
        justifyContent: 'center',
        marginTop:'50px',
    },
    class_labelSelect:{
        color:'white',
        marginRight:'15px',
    },
    class_select:{
        paddingLeft:'10px',
    },
    class_grafico:{
        display:'flex',
        flexDirection:'row',
        borderBottom: '1px solid white',
        paddingLeft: '20px',
        justifyContent: 'space-evenly',
        height: '40%',
        width: '80%',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        marginLeft: '70px',
        marginTop:'50px',
    },
    class_labels:{
        display:'flex',
        flexDirection:'row',
        paddingLeft: '20px',
        justifyContent: 'space-evenly',
        color: 'white',
        height: '10%',
        width: '80%',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        marginLeft: '70px',
    },
    class_chart:{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px',
        color: 'white',
        width:'100px',
        boxShadow:'6px -2px 18px -2px rgba(0,0,0,0.6)',
        transition:'all 0.3s ',
    },
    class_ingresos:{
        backgroundImage: colorIngresos,
        height:'100px',
    },
    class_gastos:{
        backgroundImage: colorGastos,
        height:'100px',
    },
    class_beneficios:{
        backgroundImage: colorBeneficiosPositivos,
        height:'100px',
    },
    media_maxWidth_600px:{

        class_btnAtras: {
            bottom: '60px',
            right: '40px',
            width: '50px',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            border:'1px solid '+ color2,
            hover:{
                backgroundColor:'transparent',
            }
        },
        class_select:{
            backgroundColor:'white',
        },
        class_icoAtras:{
            width: '20px',
            height: '20px',
        },
        class_grafico:{
            marginLeft:'40px',
            borderLeft:'none',
        },
        class_chart:{
            width:'50px'
        },
        class_labels:{
            marginLeft:'40px',
        }
    }
})