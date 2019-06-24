import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import axiosMiddleware from 'redux-axios-middleware'
import axios from 'axios'

const client = axios.create({
  baseURL:'https://newsapi.org/v2',
  responseType: 'json',
  options: {
    interceptors: {
      request: [
        ({getState, dispatch, getSourceAction}, req) => {
          return req;
        },
      ],
    }
  }
});

export default createStore(reducers, applyMiddleware(axiosMiddleware(client)));
