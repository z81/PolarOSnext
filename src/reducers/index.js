import { combineReducers } from 'redux';
import counter from './counter';
import windows from './windows';

export default combineReducers({
  counter,
  windows
});
