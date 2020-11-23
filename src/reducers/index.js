import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './count';

export default combineReducers({
    routing: routerReducer,
    counter
});