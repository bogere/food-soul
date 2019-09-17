
//initial state.
const initialState = {
    counter: 0,
}

// Reducers (Modifies The State And Returns A New State)
const counterReducer = (state = initialState, action)=>{
    switch (action.type) {
        //// Increase Counter
        case 'INCREASE_COUNTER':
            return {
                ...state,
                //Redux store.
                counter:state.counter + 1
            }
            break;
        //// Decrease Counter
        case 'DECREASE_COUNTER':
             return {
                 ...state,
                 //Redux store.
                counter: state.counter - 1
             }
    
        default:
            return state;
    }
}


export default counterReducer