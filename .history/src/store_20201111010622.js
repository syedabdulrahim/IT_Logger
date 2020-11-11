import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState={

}

const composeEnhancers = composeWithDevTools({ 
    
    trace: true, 
    traceLimit: 25 
}); 
const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware( thunk) 
));

const middleware=[thunk];

// const store=createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// )

export default store;