//Action creators for Authentication.. trigger for updating state in store
import  * as types from './action_types'
import {ROOT_API} from './constants'

//fetch the customer details from server.
const fetchOrderDetails = (agentId)=>{
    return dispatch =>{
        return fetch(`${ROOT_API}/api/orders/${agentId}`)
                .then(response => response.json())
                .then(data =>{
                    dispatch(fetchOrderSuccess(data)) 
                })
                .catch(err=>{
                    dispatch(fetchOrderFailure(err))
                })
    }
}

//add the customer via the API call.
const addOrderDetail = (newOrder)=>{
   return dispatch=>{
       return fetch(`${ROOT_API}/orders`, {
           method: 'post',
           headers: {
            "Content-Type": "application/json",
            "x-api-key": "7362ed7f-2894-4cd9-b76d-fa25f6e940f1"  
           },
           body: JSON.stringify(newOrder)
       })
       .then(response => response.json())
       .then(data =>{
           dispatch(newOrderSuccess(data))
       })
       .catch(err=>{
           dispatch(newOrderFailure(err))
       })
   }
}

//deletng the customer detail.
const deleteCustomerDetail = (order)=>{
    return dispatch =>{
        return fetch(`${ROOT_API}/customers/${order.id}`,{
            method: 'delete',
            headers:{
                "Content-Type": "application/json" 
            }
        })
        .then(response => response.json())
        .then(orderResponse => deleteCustomerSuccess(orderResponse))
        .catch(err=> deleteOrderFailure(err))
    }
}

//action types.
const fetchOrderSuccess = (orders)=>{
   return { 
       type: types.FETCH_ORDERS_SUCCESS, 
       payload: orders
    }
}

const fetchOrderFailure = (errorObj)=>{
     return {
         type: types.FETCH_ORDERS_FAILURE,
         payload: errorObj
     } 
}

const newOrderSuccess = (order)=>{
    return {
        type: types.ADD_ORDER_SUCCESS,
        payload: order
    }
}

const newOrderFailure = (errorObj)=>{
   return {
       type: types.ADD_ORDER_FAILURE,
       payload: errorObj
   }
}

const deleteOrderSuccess = (order)=>{
    return {
        type: types.DELETE_ORDER_SUCCESS,
        payload:order
    }
}

const deleteOrderFailure = (errorObj)=>{
   return {
       type: types.DELETE_ORDER_FAILURE,
       payload: errorObj
   }
}

//export these function
export{
    fetchOrderDetails,
    addOrderDetail,
    deleteOrderDetail
}