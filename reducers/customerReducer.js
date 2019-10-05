
import  * as types from '../actions/action_types'//strings r prone to duplicates

//initial state.
const initialState = {
    customers: []
}

const customerReducer = (state = initialState, action)=>{
     switch (action.type) {
         case types.FETCH_CUSTOMERS:
             return {
                 ...state,
                 loading: true
             }
             break;
        case types.FETCH_CUSTOMERS_SUCCESS:
            return {
                ...state,
                loading:false,
                customers: state.customers = action.payload //impure function
            }
            break;
        case types.FETCH_CUSTOMERS_FAIL:
              return {
                  ...state,
                  loading:false,
                  error: 'Error in fetching customers data'
              }
         default:
             return state
     }
}

export default customerReducer