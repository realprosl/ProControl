import {CSS} from '../../assets/CSS.js';
import {colorFondo} from '../../constantes.js';



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
        borderBottom: '1px solid black',
        borderLeft: '1px solid black',
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
    },
    class_ingresos:{
        backgroundColor: 'blue',
        width:'100px',
        height:'100px',
    },
    class_gastos:{
        backgroundColor: 'orange',
        width:'100px',
        height:'100px',
    },
    class_beneficios:{
        backgroundColor: 'green',
        width:'100px',
        height:'100px',
    },
    media_maxWidth_600px:{

        class_btnAtras: {
            bottom: '60px',
            right: '40px',
        },
        class_grafico:{
            marginLeft:'50px',
        },
        class_labels:{
            marginLeft:'50px',
        }
    }
})