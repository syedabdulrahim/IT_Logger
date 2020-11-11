import {combineReducers} from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer'
// import testReducer from './testReducer';

export default combineReducers({log:logReducer,tech:techReducer});