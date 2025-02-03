import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

let isFromContainerMain = false;

//Mount function to start up the app
const mount = (el, props = {}) =>{
    // let marketing = [];

    const { IS_CONTAINER: isFromContainer = false } = props;
    console.log({marketing1: isFromContainer }); 
    isFromContainerMain = isFromContainer;

    // for(let i=0; i<10; i++)
    // {
    //     const name = faker.commerce.productName();
    //     marketing += `<div>${name}</div>`;
    // }

    ReactDOM.render(
        <App></App>,
        el
    );

    if(process.env.NODE_ENV === 'development' && isFromContainerMain){
        console.log('marketing: marketing called from container!');
    }else
    {
        console.log('marketing: marketing running independently!');
    }
};

//If we are in development or isolation
//call mount immediately
const devRootElement = document.querySelector('#marketing-dev-root'); 
if (process.env.NODE_ENV === 'development' && !isFromContainerMain && devRootElement) {    
        mount(devRootElement,{ isFromContainerMain });
}else {
    console.error("Element with ID 'marketing-dev-root' not found!");
}

//If we running thorugh container
//export mount function
export { mount };

console.log('Welcome to Marketing!');