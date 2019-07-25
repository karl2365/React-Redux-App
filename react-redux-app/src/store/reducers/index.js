import {
    FETCH_imageUrl_START,
    FETCH_imageUrl_SUCCESS,
    FETCH_imageUrl_FAILURE
  } from '../actions';
  
  export const initialState = {
    error: '',
    isFetching: false,
    imageUrl: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_imageUrl_START:
        return {
          ...state,
          error: '',
          isFetching: true,
          imageUrl: ''
        };
      case FETCH_imageUrl_SUCCESS:
        return {
          ...state,
          error: '',
          isFetching: false,
          imageUrl: action.payload
        };
      case FETCH_imageUrl_FAILURE:
        console.log('You are out of luck!!')
      default:
        return state;
    }
  };
  