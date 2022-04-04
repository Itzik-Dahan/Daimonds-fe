import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { itemReducer } from './reducers/itemReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  itemModule: itemReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
