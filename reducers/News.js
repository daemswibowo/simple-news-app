import {combineReducers} from 'redux'
import {GET_NEWS, SET_DETAIL} from '../actions/News'

const items = (state=[], action) => {
  switch (action.type) {
    case GET_NEWS+'_SUCCESS':
      return action.payload.data.articles
      break;
    default:
    return state
  }
}

const detail = (state=null, action) => {
  switch (action.type) {
    case SET_DETAIL:
      return action.item
      break;
    default:
      return state;
  }
}

const loading = (state=false, action) => {
  switch (action.type) {
    case GET_NEWS:
      return true;
    case GET_NEWS+'_SUCCESS':
      return false;
      break;
    default:
      return state;
  }
}

export default combineReducers({items, loading, detail})
