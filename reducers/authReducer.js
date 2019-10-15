//Reducer --> takes in 2 parameters(copy of current state + action payload)
// to calculate the next state of the app.

import * as types from '../actions/action_types'

// Initial State
const initialState = {
    authenticated:false,
    currentUser:{},
    loginError:{},
    signupSuccess: false
}

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action)=>{
     switch (action.type) {
         //// Logged In
        case types.LOGIN_USER_SUCCESS:
             return {
                 ...state,
                  // Redux Store
                  authenticated:true,
                  currentUser:action.payload 
                 }
             break;
        case types.LOGIN_USER_FAILED:
            return{
               ...state,
               authenticated:false,
               loginError: action.payload
            }
            break;
        //sign up 
        case types.SIGNUP_SUCCESS:
             return{
                 ...state,
                signupSuccess:true 
             }
            break;
        case types.SIGNUP_FAILURE:
            return{
                ...state,
                signupSuccess:false
            }
        //Logged Out.
        case types.LOGGED_OUT:
            return {
                ...state,
                authenticated:false,
                currentUser: null
            }
     
         default:
            return state
     }
}

export default authReducer