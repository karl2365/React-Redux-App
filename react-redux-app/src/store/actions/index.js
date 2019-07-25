import axios from 'axios';

export const FETCH_imageUrl_START = 'FETCH_imageUrl_START';
export const FETCH_imageUrl_SUCCESS = 'FETCH_imageUrl_SUCCESS';
export const FETCH_imageUrl_FAILURE = 'FETCH_imageUrl_FAILURE';

export const fetchImageUrl = (

) => dispatch => {
  dispatch({ type: FETCH_imageUrl_START });
  axios
    .get(
      `https://dog.ceo/api/breeds/image/random`
    )
    .then(res => {
      dispatch({ type: FETCH_imageUrl_SUCCESS, payload: res.data.message });
    })
    .catch(err => console.log(err.response));
};
