import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App/App.js';
import reportWebVitals from './reportWebVitals.js';
import { StyleSheet, css } from 'aphrodite';
import { uiReducer, initialState } from './reducers/uiReducer.js';
import { Map } from 'immutable';

const globalStyles = StyleSheet.create({
  root: {
    fontFamily:  'Arial, Helvetica, sans-serif'
  },
  html: {
    fontSize: '62.5%',
    fontFamily: 'Arial, sans-serif'
  }
});

const store = configureStore({reducer: uiReducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
document.documentElement.className = css(globalStyles.html);
document.getElementById('root').className = css(globalStyles.root);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App isLoggedIn={false}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default store;