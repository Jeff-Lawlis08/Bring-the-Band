import React from 'react';
import ReactDom from 'react-dom';
import router from './router';

const container = document.getElementById('container');
// console.log('hello');
ReactDom.render(router, container);
