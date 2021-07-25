export const CSS = (datos)=>{
    // funciones 
    const convertedStyleCss = (item)=>{

        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
        
            let res;
            for(let letter of item){
                for(let letras of upperCase){
                    if(letras === letter){
                        item = item.replace(letter , `-${letter.toLowerCase()}`)
                    }else{
                         res = false;
                    }
                }
            }
            return item;
        
        
        
    }
    const convertInternCss = (typeItem ,phaterItem,nameComponent,bodyItem,inHover)=>{

        let hoverHeader = phaterItem.replace(/id_/g , '#')
                                .replace(/class_/g, '.');

            hoverHeader = convertedStyleCss(hoverHeader);

        // modificacion colores para rgba
        let varOfColors = [];
        let contador = 0;
        for(let item in bodyItem){ 
            if(item === 'backgroundColor' || item === 'color' || item === 'backgroundImage' || item === 'boxShadow'){
                varOfColors.push(bodyItem[item]);
                bodyItem[item] = `#${contador}`;
                contador++;

            }
        }
        /////////////////

        let hover = convertedStyleCss(JSON.stringify(bodyItem));
        hover = hover.replace(/,/g , ';')
                        .replace(/"/g,' ')
                        .replace(/}/g , ';}');
        //// modificacion colores para rgba
        if(contador > 0){
            for(let i =0 ; i<contador ; i++){
                hover = hover.replace(`#${i}`,varOfColors[i]);
            }
        }
        //////////////////////////////
        if(typeItem === 'after' || typeItem === 'before'){
            let content = bodyItem.content;
            if(inHover){
                hoverHeader = `${hoverHeader}-${nameComponent}:hover::${typeItem} `;
            }else{
                hoverHeader = `${hoverHeader}-${nameComponent}::${typeItem} `;
            }
            if(content === ''){
                hover = hover.replace('content :','content : ""');
            }else{
                hover = hover.replace(content, `"${content}"`)
            }
        }else if(typeItem === 'global'){
            hoverHeader = `${hoverHeader}-${nameComponent} ` ;                     
        }else{
            hoverHeader = `${hoverHeader}-${nameComponent}:${typeItem} ` ;                     
        }
        return `\n${hoverHeader}${hover}\n`
    }
    const keyFrameToString = (keyFrame)=>{
    }
    const bodyToString = (body , nameComponent)=>{

        let {component} = body;
        if(component === undefined)component = nameComponent;
        delete body.component;
        let total = '';
        let hovers = '';
        let befores = '';
        let afters = '';
        let nthChilds = '';
        for(let item in body){

            let property = body[item];
            // saco los nthchild del body 
            let innerProperties = Object.keys(property);
            for(let innerProperty of innerProperties){
                if(innerProperty.includes('nth')){
                    let headerNth = innerProperty.replace('nthChild_' , '');
                    
                    let bodyNth = property[innerProperty];
                    delete property[innerProperty];
                    nthChilds += convertInternCss(`nth-child(${headerNth})`,item,component,bodyNth);


                }
            }
            
            if(property.hover || property.before || property.after){
                let {hover , before , after} = property;
                delete property.after;
                delete property.before;
                delete property.hover;
                // hover 
                if(hover.after || hover.before){
                    console.log('after o before en hover ');
                    if(hover.after){
                        afters += convertInternCss('after',item,component,hover.after,true);
                    }
                    if(hover.before){
                        befores += convertInternCss('before',item,component,hover.before,true);
                    }
                }
                    hovers += convertInternCss('hover',item,component,hover);
                    if(after != undefined ){
                // after 
                    afters += convertInternCss('after',item,component,after);
                    }
                    if(before != undefined){ 
                // before 
                    befores += convertInternCss('before',item,component,before);
                    }
                // nth
                console.log(nthChilds);

            }

                property = convertInternCss('global',item,nameComponent,property);
            total += property ;
        }
        return  total + hovers + befores + afters + nthChilds;
    }
    const mediaToString = (body)=>{

            // busco si los medias estan en modo nuevo 
            let properties = Object.keys(body);
            let medias = '';
            properties.forEach(property=>{
                if(property.includes('media') && property.includes('_') && property.includes('px')){
                    let mediaBody = bodyToString(body[property],datos.component);
                    let mediaheader = convertedStyleCss(property);
                        mediaheader = mediaheader.replace('media_', '').replace(/_/,':');
                        mediaheader = `@media(${mediaheader})\n`;
                    medias += `${mediaheader}{${mediaBody}}\n `

                }
            })
            return medias;

    }
    const cleanBody = (body)=>{
        let properties = Object.keys(body);
        properties.forEach(property=>{
            if(property.includes('media') || property.includes('hover') || property.includes('keyFrame')){
                delete body[property];
            }
        });
        return body;
    }

    // hago una copia de datos
    let body = JSON.parse(JSON.stringify(datos))

    // envio datos a sus funciones de transformaciones
    const keyFrameString = keyFrameToString(body);
    const mediaString = mediaToString(body);

    // borro las propiedades que no sean globales
    body = cleanBody(body);

    const bodyString = bodyToString(body,datos.component);


    return bodyString + mediaString;


}




