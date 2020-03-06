import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from '../src/reducers';
import ed1Stub from './mock_api/stubs/endpoint1.json';
import ed2Stub from './mock_api/stubs/endpoint2.json';


/////// create an empty store with preset initial stats
export const createMockStore = ()=>{
	const middlewares = [];
	const initialState = {};
	const allReducers = combineReducers({ ...reducers });

	let store = createStore(allReducers, initialState, applyMiddleware(...middlewares));
	store.dispatch({
    type: 'SOMETHING_NECESSARY',
    value:: 'something_necessary_when_start_app'
  });
	return store;
}

/////// load data to store

// endpoint1
export const loadEd1ResponseToStore = (store, override=false)=>{
	if(typeof override === 'boolean' && !override){
		store.dispatch({
			type: 'RECEIVE_RESPONSE_ENDPOINT_1',
			value: notifications
		});
		return store;
	}
	else{
		store.dispatch({
			type: 'RECEIVE_RESPONSE_ENDPOINT_1',
			value: override
		});
		return store;
	}
}

// endpoint2
export const loadEd2ResponseToStore = (store, override=false)=>{
	if(typeof override === 'boolean' && !override){
		store.dispatch({
			type: 'RECEIVE_RESPONSE_ENDPOINT_2',
			value: notifications
		});
		return store;
	}
	else{
		store.dispatch({
			type: 'RECEIVE_RESPONSE_ENDPOINT_2',
			value: override
		});
		return store;
	}
}
