import React from 'react';
import ReactDOM from 'react-dom'; // could be react native for mobile
import './index.css';
// import Card from './Card'; // no extension assumes it is a .js
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';


ReactDOM.render( < App/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
