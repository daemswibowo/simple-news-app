import {combineReducers} from 'redux'
const test = (state='Hello world', action) => {
  return state;
}
export default combineReducers({test})
