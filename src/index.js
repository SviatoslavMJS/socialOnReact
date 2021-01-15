
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



export let renderEntireTree = () => {

    ReactDOM.render(
      <React.StrictMode>
        <App state={store._state} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>,
      document.getElementById('root') );
    };

store.subscribe(renderEntireTree); 
renderEntireTree(store);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();