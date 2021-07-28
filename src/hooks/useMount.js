import {useState} from 'react';

export const useMount = (initial)=>{
    const [mount ,setMount] = useState(initial);
    const changeState = ()=>{
        setMount(!mount)
        if(mount){
            if(window.screen.width < '600'){
                document.querySelector('.container-crud').style.maxHeight = 'initial';
            }else{
                document.querySelector('.container-crud').style.maxHeight = '280px';
            }
        }else{
            document.querySelector('.container-crud').style.maxHeight = '0px';

        }
    }

   return {mount , changeState};
}