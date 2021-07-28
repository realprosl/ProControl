import {PORT_BD} from '../../constantes';
import {Crud} from '../Crud/Crud';
import {Form} from '../Form/form';
import {Menu} from '../Menu/Menu';
import {useMount} from '../../hooks/useMount';
import { getAjax } from '../../assets/getAjax';
import {marcarIcono} from '../../assets/marcarIcono.js';
import {useState , useEffect} from 'react';
import {ReactComponent as IconoNuevo} from '../../svg/nuevo.svg';
import { color1,color2,color3 } from '../../constantes';
import {styles} from './styles.js';


 export default function App() {

  const name = `app`;  

  const {mount , changeState} = useMount(false);
  const [obras , setObras] = useState([]);
  const [staticObras , setStaticObras] = useState();
  const [baseDatos , setBaseDatos] = useState('obras');
  const [sumatorio , setSumatorio] = useState(false);
  const [propertySumario,setPropertySumario] = useState();
  const [totalSumatorio , setTotalSumatorio] = useState(0);
  const [busqueda , setBusqueda] = useState();
  const [propiedad,setPropiedad] = useState('id');


  // useEfects
  useEffect(()=>{
      //reseteo obras
      setObras([]);
      getAjax(`${PORT_BD}/get/${baseDatos}`,setObras);
      getAjax(`${PORT_BD}/get/${baseDatos}`,setStaticObras);
      marcarIcono(baseDatos);
  
  },[baseDatos])


  return (
    <div className={`container-${name}`}>
    <Menu
        setBaseDatos={setBaseDatos}
        baseDatos={baseDatos}
        obras={obras}
        totalSumatorio={totalSumatorio}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        setObras={setObras} 
        propiedad={propiedad}
        setPropiedad={setPropiedad}
        staticObras={staticObras}
        name="menu">
    </Menu>
    <div className={`tittle-${name}`}>
    <div className={`container-img-${name}`}>
        <img src="./logo.png" className={`img-${name}`}></img>
    </div>
    <h2 style={{marginLeft:"10px",color:color2}}>Control {baseDatos} </h2>
    </div>

    <Crud 
        obras={obras} 
        setObras={setObras} 
        staticObras={staticObras}
        baseDatos={baseDatos}
        setSumatorio={setSumatorio}
        sumatorio={sumatorio}
        setPropertySumario={setPropertySumario}
        propertySumario={propertySumario}
        totalSumatorio={totalSumatorio}
        setTotalSumatorio={setTotalSumatorio}
        setPropiedad={setPropiedad}
        setBusqueda={setBusqueda}>
    </Crud>

    <div className="FormContainer">
        {!mount ? 
                <div className={`footer-${name}`}>
                    <div 
                      className={`button-${name}`} 
                      onClick={()=>changeState()}>
                      <IconoNuevo className={`icono-button-${name}`}></IconoNuevo>
                      <span className={`texto-button-${name}`}>
                        Nuevo
                      </span>
                    </div>
                </div>
                : <></> }
                  
        <Form 
            on={mount} 
            changeState={changeState}
            obras={obras} 
            setObras={setObras}
            staticObras={staticObras}
            baseDatos={baseDatos}>
        </Form>
      
    </div>
    <style>{styles}</style>
    </div>
  );
}

