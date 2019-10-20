
import  * as types from '../actions/action_types'//strings r prone to duplicates

//initial state.
const initialState = {
    orders: [],
    errorResponse: ''
}

const orderReducer = (state = initialState, action)=>{
     switch (action.type) {
         case types.FETCH_ORDERS:
             return {
                 ...state,
                 loading: true
             }
             break;
        case types.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                loading:false,
                customers: state.orders = action.payload //impure function
            }
            break;
        case types.FETCH_ORDERS_FAILURE:
              return {
                  ...state,
                  loading:false,
                  errorResponse: 'Error in fetching orders data'
              }
        case types.ADD_ORDER_SUCCESS:
             return{
                 ...state,
                 orders:[...state.orders, action.payload]
             }
             break;
        case types.ADD_ORDER_FAILURE:
            return{
               ...state,
               errorResponse: 'Failed to add the customer order'
            }
            break;
        case types.DELETE_ORDER_SUCCESS:
              return{
                  ...state,
                  orders: state.orders.filter(item => item !== action.payload )
              }
              break;
        case types.DELETE_ORDER_FAILURE:
              return{
                ...state,
                errorResponse: 'Failed to delete the customer order'
              }
              break;
        default:
           return state
     }
}

export default orderReducer