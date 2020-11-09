import {combineReducers} from 'redux';
import logReducer from './logReducer';
// import testReducer from './testReducer';

export default combineReducers({log:logReducer,test:testReducer});