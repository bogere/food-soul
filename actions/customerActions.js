//Action creators for Authentication..
import  * as types from './action_types'
import {ROOT_API} from './constants'

//fetch the customer details from server.
const fetchCustomerDetails = (agentId)=>{
    return dispatch =>{
        return fetch(`${ROOT_API}/api/customers/${agentId}`)
                .then(response => response.json())
                .then(data =>{
                    dispatch(fetchCustomerSuccess(data)) 
                })
                .catch(err=>{
                    dispatch(fetchCustomerFailure(err))
                })
    }
}

//add the customer via the API call.
const addCustomerDetail = (newCustomer)=>{
   return dispatch=>{
       return fetch(`${ROOT_API}/customers`, {
           method: 'post',
           headers: {
            "Content-Type": "application/json",
            "x-api-key": "7362ed7f-2894-4cd9-b76d-fa25f6e940f1"  
           },
           body: JSON.stringify(newCustomer)
       })
       .then(response => response.json())
       .then(newCustomer =>{
           dispatch(newCustomerSuccess(newCustomer))
       })
       .catch(err=>{
           dispatch(newCustomerFailure(err))
       })
   }
}

//deletng the customer detail.
const deleteCustomerDetail = (customer)=>{
    return dispatch =>{
        return fetch(`${ROOT_API}/customers/${customer.id}`,{
            method: 'delete',
            headers:{
                "Content-Type": "application/json" 
            }
        })
        .then(response => response.json())
        .then(customerResponse => deleteCustomerSuccess(customerResponse))
        .catch(err=> deleteCustomerFailure(err))
    }
}

//action types.
const fetchCustomerSuccess = (customers)=>{
   return { 
       type: types.FETCH_CUSTOMERS_SUCCESS, 
       payload: customers
    }
}

const fetchCustomerFailure = (errorObj)=>{
     return {
         type: types.FETCH_CUSTOMERS_FAILURE,
         payload: errorObj
     } 
}

const newCustomerSuccess = (customer)=>{
    return {
        type: types.ADD_CUSTOMER_SUCCESS,
        payload: customer
    }
}

const newCustomerFailure = (errorObj)=>{
   return {
       type: types.ADD_CUSTOMER_FAILURE,
       payload: errorObj
   }
}

const deleteCustomerSuccess = (customer)=>{
    return {
        type: types.DELETE_CUSTOMER_SUCCESS,
        payload:customer
    }
}

const deleteCustomerFailure = (errorObj)=>{
   return {
       type: types.DELETE_CUSTOMER_FAILURE,
       payload: errorObj
   }
}

//export these function
export{
    fetchCustomerDetails,
    addCustomerDetail,
    deleteCustomerDetail
}