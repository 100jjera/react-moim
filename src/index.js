import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider}from 'react-redux';
import{configureStore}from './module/index';
/**
 * Provider에 store 연결을  해야
 * 하위에 있는 컴포넌트에서 state값을 가져오거나
 * action을 dispatch 할 수 있음.
 */
const store=configureStore()

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));

