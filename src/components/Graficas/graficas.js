import React ,{useState , useEffect} from 'react';
import {getAjax} from '../../assets/getAjax';
import {generateSelect} from '../../assets/generateSelect.js';
import {changeChart} from '../../assets/changeChart.js';
import {ReactComponent as Atras} from '../../svg/atras.svg';
import { PORT_BD } from '../../constantes.js';
import {color1,color2,color3,color4} from '../../constantes.js';
import {styles} from './styles.js';


export const Graficas = (props)=>{

    const name = 'graficas';
    const {graficasOn , setGraficasOn} = props;
    const [datosGrafica , setDatosGrafica] = useState({});
    const [select , setSelect] = useState(null);

    useEffect(()=>{
        getAjax(`${PORT_BD}/getAll`,setDatosGrafica);
    },[])

    return(
        <div className={`container-${name}`}> 
            <div className={`container-select-${name}`}>
                <label
                    className={`label-select-${name}`}>
                    Selecionar grafica de :
                </label>
                <select 
                    onChange={(e)=>{changeChart(e,datosGrafica , setSelect )}}
                    className={`select-${name}`}>
                    {generateSelect(datosGrafica)}
                </select>
            </div>

            <div className={`grafico-${name}`}>
                <div id="ingresos" className={`chart-${name}  ingresos-${name}`}>INGRESOS</div>
                <div id="gastos" className={`chart-${name}  gastos-${name}`}>GASTOS</div>
                <div id="beneficios" className={`chart-${name}  beneficios-${name}`}>BENEFICIOS</div>
            </div>
            <div className={`labels-${name}`}>
                <div className={`label-${name}`}>{(select==null)? 0 : parseInt(datosGrafica[select].ingresos)} €</div>
                <div className={`label-${name}`}>{(select==null)? 0 : parseInt(datosGrafica[select].gastos)} €</div>
                <div className={`label-${name}`}>{(select==null)? 0 : parseInt(datosGrafica[select].beneficio)} €</div>
            </div>
           <div 
                className={`btn-atras-${name}`}
                onClick={() => setGraficasOn(!graficasOn)}>
                <Atras className={`ico-atras-${name}`} ></Atras>
            </div>

            <style>{styles}</style>
        </div>
    )
}