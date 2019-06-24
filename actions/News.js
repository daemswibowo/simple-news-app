export const PREFIX = "_NEWS";
export const GET_NEWS = PREFIX+'_GET_NEWS';
export const SET_DETAIL = PREFIX+'_SET_DETAIL';

export const getNews = (params='') => {
  return {
    type: GET_NEWS,
    payload: {
      request: {
        url: '/top-headlines?'+params
      }
    }
  }
}

export const setDetail = (item) => {
  return {
    type: SET_DETAIL,
    item
  }
}
