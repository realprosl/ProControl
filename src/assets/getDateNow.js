

export const getDateNow = (option)=>{

    const date = new Date();
    let getMonth = ((date.getMonth()+1)< 10) ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`
    let getDate = ((date.getDate())< 10) ? `0${date.getDate()}` : `${date.getDate()}`
    let dateNow;
    if(option == 1)dateNow = `${date.getFullYear()}-${getMonth}-${getDate}`
    if(option == 2)dateNow = `${getDate}-${getMonth}-${date.getFullYear()}`

   console.log('fechade hoy ==>',dateNow);
    return dateNow;
}