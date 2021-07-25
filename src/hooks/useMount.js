import {useState} from 'react';

export const useMount = (initial)=>{
    const [mount ,setMount] = useState(initial);
    const changeState = ()=>{
        setMount(!mount)
        if(mount){
            document.querySelector('.container-crud').style.maxHeight = '280px';
        }else{
            document.querySelector('.container-crud').style.maxHeight = '160px';

        }
    }

   return {mount , changeState};
}