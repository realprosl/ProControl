import React from 'react';

export const Busqueda =(props)=>{

    const {name} = props;
    
    return(
        <div className={"Busqueda-"+name}>
            <input className={"input-"+name}></input>
        </div>
    )
}