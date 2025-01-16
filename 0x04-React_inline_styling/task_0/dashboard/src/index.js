import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { StyleSheet, css } from 'aphrodite';

const globalStyles = StyleSheet.create({
  root: {
    fontFamily:  'Arial, Helvetica, sans-serif'
  },
  html: {
    fontSize: '62.5%',
    fontFamily: 'Arial, sans-serif'
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
document.documentElement.className = css(globalStyles.html);
document.getElementById('root').className = css(globalStyles.root);
root.render(
  <React.StrictMode>
    <App isLoggedIn={true}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
