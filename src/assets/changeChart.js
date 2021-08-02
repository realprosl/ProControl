
export const changeChart = (e,datosGrafica,setSelect)=>{

    e.preventDefault();
    let select = e.target.value;
    setSelect(select);
    const {beneficio , gastos , ingresos} = datosGrafica[select];
    let pixBeneficio , pixGastos , pixIngresos
    const maxHeight = document.querySelector('.grafico-graficas').clientHeight -10;
    const $beneficios = document.getElementById('beneficios');
    const $gastos = document.getElementById('gastos');
    const $ingresos = document.getElementById('ingresos');
    if(ingresos <= 0){
        pixIngresos = 0;
        pixBeneficio = 0;
        pixGastos = 0;
    }else{
        pixIngresos = maxHeight;
        pixGastos = (gastos*maxHeight/ingresos);
        if(beneficio < 0){
            pixBeneficio -= beneficio*2;
            pixBeneficio = (pixBeneficio*maxHeight/ingresos);
        }else{
            pixBeneficio = (beneficio*maxHeight/ingresos);
        }
    }

    $beneficios.style.height = pixBeneficio+'px';
    $gastos.style.height = pixGastos+'px';
    $ingresos.style.height = pixIngresos+'px';
    if(beneficio < 0) $beneficios.style.backgroundColor = 'red'; 
    if(beneficio > 0) $beneficios.style.backgroundColor = 'green';
}