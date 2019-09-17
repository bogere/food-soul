//Reducer --> takes in 2 parameters(copy of current state + action payload)
// to calculate the next state of the app.

// Initial State
const initialState = {
    loggedIn:false
}

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action)=>{
     switch (action.type) {
         //// Logged In
        case 'LOGGED_IN':
             return {
                 ...state,
                  // Redux Store
                  email:action.payload 
                 }
             break;
        //Logged Out.
        case 'LOGGED_OUT':
            return {
                ...state,
                email:action.payload
            }
     
         default:
            return state
     }
}

export default authReducer