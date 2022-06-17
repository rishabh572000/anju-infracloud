import {createStore, applyMiddlewere} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from './RootReducer';

const store = createStore(
    RootReducer, 
    composeWithDevTools(applyMiddlewere(logger, thunk))
)

export default store;