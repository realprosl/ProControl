
export const handleSelect = (e,props)=>{
 e.preventDefault();
 const {setPropiedad} = props;
 setPropiedad(e.target.value);
}