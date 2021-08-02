
export const generateSelect = (datos)=>{

    if(Array.isArray(datos))datos = datos[0]
 //const {staticObras} = props;
 if(datos){
    const properties = Object.keys(datos);
    const res =  properties.map(property=>{
        if(property !== '_id')return <option value={property}>{property}</option>
    })
    return res;

 }
 

}