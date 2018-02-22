import React from 'react';
import { render } from 'react-snapshot';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
window.$ = window.jQuery=$;
window.Popper = require('popper.js');
require('bootstrap');

import App from './components/App'; // eslint-disable-line import/first
import registerServiceWorker from './registerServiceWorker'; // eslint-disable-line import/first

render(<App />, document.getElementById('root'));
registerServiceWorker();
