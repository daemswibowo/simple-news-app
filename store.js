import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import axiosMiddleware from 'redux-axios-middleware'
import axios from 'axios'
import thunk from 'redux-thunk'

const client = axios.create({
  baseURL:'https://newsapi.org/v2',
  responseType: 'json',
});

export default createStore(reducers, applyMiddleware(thunk, axiosMiddleware(client, {
  interceptors: {
    request: [
      function ({getState, dispatch, getSourceAction}, req) {
        req.headers['Authorization'] = 'd7ba46552d5c4fb5bb1f670a208f8321'
        return req;
      },
    ],
  }
})));
