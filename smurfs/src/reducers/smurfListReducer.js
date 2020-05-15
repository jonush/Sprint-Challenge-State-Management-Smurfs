import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../actions/fetchSmurfs';

export const initialState = {
  isFetching: false,
  smurfs: [],
  errors: ''
}

export const smurfListReducer = (state = initialState, action) => {
  console.log('The reducer has been accessed');
  switch(action.type) {
    case FETCH_START:
      console.log('FETCH_START');
      return {
        ...state,
        isFetching: true
      }
    case FETCH_SUCCESS:
      console.log('FETCH_SUCCESS');
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      }
    case FETCH_FAILURE:
      console.log('FETCH_FAILURE');
      return {
        ...state,
        errors: action.payload
      }
    default: 
      return state
  }
}