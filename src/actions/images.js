import axios from "axios";

export const getImages = () => {
  return function(dispatch) {
    return  axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
      dispatch(setImage(res.data));
    }).catch((e) => console.log(e));
  }
}

export const setImage = (data) => {
  return {
    type: 'SET_IMAGES',
    data,
  }
}