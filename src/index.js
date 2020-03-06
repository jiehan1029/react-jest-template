import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import * as reducers from "./reducers";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let middlewares = [];
const reducer = combineReducers({ ...reducers });
const persistedState = {};
const store = createStore(reducer, persistedState, applyMiddleware(...middlewares));

const callback = ()=>{
	console.log('callback passed to app is called!');	
}

ReactDOM.render(
	<Provider store={store}>
		<App callback={callback}/>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
