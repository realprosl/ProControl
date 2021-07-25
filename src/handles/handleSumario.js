import { calcularTotalSumatorio } from "../assets/calcularTotalSumatorio";

export const handleSumario = (props,property)=>{

    const {
            setSumatorio, 
            sumatorio ,
            setPropertySumario ,
            setTotalSumatorio,
            propertySumario
        } = props;

    setSumatorio(!sumatorio);
    setPropertySumario(property);
    calcularTotalSumatorio(props,property);


}