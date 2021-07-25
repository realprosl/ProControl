
export const resetFormulario = (e,posiciones = 1)=>{
    let $form;
    console.log(posiciones);
    for(let i =1 ; i <= posiciones ; i++){
        if(i <= 1){
            $form = e.target.parentNode
        }else if(i > 1){
           $form = $form.parentNode 
        }
    }
    $form.reset();
}