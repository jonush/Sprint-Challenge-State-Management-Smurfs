import axios from 'axios';

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';


export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_START, payload: smurf});
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res)
      dispatch({ type: ADD_SUCCESS })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: ADD_FAILURE, payload: err })
    })
}