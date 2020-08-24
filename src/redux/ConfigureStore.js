import {createStore,combineReducers,applyMiddleware} from 'redux';
import  thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Comments} from './comments'
export const ConfigureStore=()=>{
	const store=createStore(
		combineReducers({
			comments:Comments
			

		})
		,applyMiddleware(thunk,logger)
		);
	return store;
};