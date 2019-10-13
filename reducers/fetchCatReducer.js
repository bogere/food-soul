//Reducer --> takes in 2 parameters(copy of current state + action payload)
// to calculate the next state of the app.

import * as types from '../actions/action_types'

const initialState = {
     cats:[]
}
const fetchCatReducer = (state = initialState, action)=>{
     switch (action.type) {
         //// HTTP request was successful, we must update the state.
        case types.FETCH_CATS_SUCCESS: 
             return {
                  ...state,
                  loading:false,
                  //cats: state.cats = action.payload
                  cats:action.payload
             }
             break;
        //HTTP request has been started, this is the right place to for example display a busy indicator to the user.
        case types.FETCH_CATS_START: // loading button
             return {
                  ...state,
                  loading: true
             }
             break;
        //HTTP request has failed. You can show an error component or something.
        case types.FETCH_CATS_ERROR:
             return {
                  ...state,
                  loading:false,
                  error: 'Failed to load the cats records'
             }
             break;
        case types.ADOPT_CAT_SUCCESS:
             return {
                  ...state,
                  cats:[...state.cats, action.payload]  // OR.
                  //cats: state.cats.concat(action.payload)  //impure    
             }
             break;
        case types.CHASE_CAT_SUCCESS:
             return{
                  ...state,
                cats: state.cats.filter(item => item !== action.payload)
             }
             break;
     
         default:
             return state
             break;
     }
}

export default fetchCatReducer