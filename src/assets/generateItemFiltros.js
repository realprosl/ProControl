
export const generateItemFiltros = (props,name)=>{

    const {staticObras}= props;
    console.log(staticObras);
    if(staticObras){
        let properties = Object.keys(staticObras[0]);
        return  properties.map(property=>{
            if(property === 'fecha'){
                return (<>
                        <label>{`Filtro ${property}`}</label>
                        <label>Inicio</label>
                        <input type="date" name={`${property} inicio`} className={`input-${name}`} ></input>
                        <label>Fin</label>
                        <input type="date" name={`${property} fin`} className={`input-${name}`} ></input>
                        </>)
            }else if(property === '_id'){

                return <></>
                
            }else{
                return (<>
                        <label>{`Filtro ${property}`}</label>
                        <input type="text" name={property} className={`input-${name}`}></input>
                        </>)
            }
            })
    }

}