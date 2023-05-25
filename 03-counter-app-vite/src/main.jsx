import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './firstApp';
import './styles.css'
import { CounterApp } from './CounterApp';
// import { App } from './HelloWorldApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        {/* <FirstApp title='Hola soy Layla' subTitle={123}/> */}
        {/* <FirstApp title='Hola soy yo' subTitle={123}/> */}
        <CounterApp value={123456}/>
    </React.StrictMode>
)