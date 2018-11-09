import { combineReducers } from 'redux';
import addTab from './bookReducers'
import messageReducer from './messageReducers';
import asyncReducer from './asyncReducer';
export default combineReducers({
  addTab: addTab,
  messageReducer:messageReducer,
  asyncReducer:asyncReducer
  // More reducers if there are
  // can go here
});