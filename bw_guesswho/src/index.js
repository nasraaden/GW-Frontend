import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import { library, icon } from '@fortawesome/fontawesome-svg-core'
// import { faCamera } from '@fortawesome/free-solid-svg-icons'

// library.add(faCamera)

// const camera = icon({ prefix: 'fas', iconName: 'camera' })
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';

import { Reducer } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(Reducer);

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
