//Reducer --> takes in 2 parameters(copy of current state + action payload)
// to calculate the next state of the app.

import * as types from '../actions/action_types'

const fetchCatReducer = (state = [], action)=>{
     switch (action.type) {
         //// HTTP request was successful, we must update the state.
        case types.FETCH_CATS_SUCCESS: 
             return [
                 ...state,
                 ...action.payload
             ]
             break;
        //HTTP request has been started, this is the right place to for example display a busy indicator to the user.
        case types.FETCH_CATS_START: // loading button
             return state
        //HTTP request has failed. You can show an error component or something.
        case types.FETCH_CATS_ERROR:
             return state
         default:
             break;
     }
}

export default fetchCatReducer