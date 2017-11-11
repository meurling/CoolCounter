import {combineReducers} from 'redux';
import countReducer from './countReducer.js';
import navReducer from './navReducer.js';

const allReducers= combineReducers({
  count: countReducer,
  nav: navReducer
});
export default allReducers;
