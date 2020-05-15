import {
  ADD_START,
  ADD_SUCCESS,
  ADD_FAILURE,
} from '../actions/addSmurf';

export const initialState = {
  isAdding: false,
  smurf: [],
  errors: '',
}

export const addSmurfReducer = (state = initialState, action) => {
  console.log('The reducer has been accessed');
  switch(action.type) {
    case ADD_START:
      console.log('ADD_START');
      return {
        ...state,
        isAdding: true
      }
    case ADD_SUCCESS:
      console.log('ADD_SUCCESS');
      return {
        ...state,
        isAdding: false,
        smurf: [ ...state.smurf, action.payload ]
      }
    case ADD_FAILURE:
      console.log('ADD_FAILURE');
      return {
        ...state,
        isAdding: false,
        errors: action.payload
      }
    default: 
      return state
  }
}