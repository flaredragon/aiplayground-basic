import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import {
  addTab
} from '../actions/bookActions';
const store = createStore(rootReducer, window.STATE_FROM_SERVER);

console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(addTab('Learn about actions'))
// store.dispatch(addTab('Learn about reducers'))
// store.dispatch(addTab('Learn about store'))
// Stop listening to state updates
//unsubscribe()

export default store;