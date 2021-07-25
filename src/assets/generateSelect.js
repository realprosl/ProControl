
export const generateSelect = (props)=>{

 const {staticObras} = props;
 if(staticObras){
    const properties = Object.keys(staticObras[0]);
    console.log(properties);
    const res =  properties.map(property=>{
        if(property !== '_id')return <option value={property}>{property}</option>
    })
    console.log(res);
    return res;

 }
 

}