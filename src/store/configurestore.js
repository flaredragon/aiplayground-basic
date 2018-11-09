import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(addTab('Learn about actions'))
// store.dispatch(addTab('Learn about reducers'))
// store.dispatch(addTab('Learn about store'))
// Stop listening to state updates
unsubscribe()

export default store;