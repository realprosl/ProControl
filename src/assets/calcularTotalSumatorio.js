
export const calcularTotalSumatorio = (props,property)=>{

    const {obras , sumatorio,setTotalSumatorio , propertySumario} = props;
    if(sumatorio){
        let total=0;
        obras.map(obra=>{

            total = parseInt(obra[propertySumario])+total;
        })
        console.log('Total===>',total);
        setTotalSumatorio(total)
    }else{
        setTotalSumatorio(0);
    }


  
}
