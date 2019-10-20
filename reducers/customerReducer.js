
import  * as types from '../actions/action_types'//strings r prone to duplicates

//initial state.
const initialState = {
    customers: [],
    errorResponse: ''
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
        case types.FETCH_CUSTOMERS_FAILURE:
              return {
                  ...state,
                  loading:false,
                  errorResponse: 'Error in fetching customers data'
              }
        case types.ADD_CUSTOMER_SUCCESS:
             return{
                 ...state,
                 customers:[...state.customers, action.payload]
             }
             break;
        case types.ADD_CUSTOMER_FAILURE:
            return{
               ...state,
               errorResponse: 'Failed to add the customer'
            }
            break;
        case types.DELETE_CUSTOMER_SUCCESS:
              return{
                  ...state,
                  customers: state.customers.filter(item => item !== action.payload )
              }
              break;
        case types.DELETE_CUSTOMER_FAILURE:
              return{
                ...state,
                errorResponse: 'Failed to delete the customer'
              }
              break;
        default:
           return state
     }
}

export default customerReducer