import { combineReducers } from 'redux';
import addTab from './bookReducers'

export default combineReducers({
  addTab: addTab,
  // More reducers if there are
  // can go here
});