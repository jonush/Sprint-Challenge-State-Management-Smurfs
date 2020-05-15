import axios from 'axios';

export const DELETE_START = 'ADD_START';
export const DELETE_SUCCESS = 'ADD_SUCCESS';
export const DELETE_FAILURE = 'ADD_FAILURE';


export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_START, payload: id});
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res)
      dispatch({ type: DELETE_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DELETE_FAILURE, payload: err })
    })
}