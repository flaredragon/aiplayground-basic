import { combineReducers } from 'redux';
import addTab from './bookReducers'
import messageReducer from './messageReducers';

export default combineReducers({
  addTab: addTab,
  messageReducer:messageReducer
  // More reducers if there are
  // can go here
});