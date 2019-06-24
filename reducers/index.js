import {combineReducers} from 'redux'
import news from './News'

const test = (state='Hello world', action) => {
  return state;
}
export default combineReducers({test, news})
