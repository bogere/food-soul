//Action creators for Authentication..
import  * as types from './action_types'
import {ROOT_API} from './constants'
import {customers} from '../constants/sampleData'


//fetch the customer details from server.
const fetchCustomerDetails = (agentId)=>{
    return dispatch =>{
        return fetch(`${ROOT_API}/mobile/customers/${agentId}`)
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
       return fetch(`${ROOT_API}/customers/${newCustomer.agentId}`, {
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

//showing and hiding the customer form.
const toggleCustomerForm = (visibilityMode)=>{
    
   return dispatch =>{
       dispatch(showOrHideForm(visibilityMode))
   }
}

//dealing with static data for the customers.
const fetchStaticCustomers = ()=>{
    return dispatch =>{
       dispatch(staticCustomerData(customers))
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

//static data for customers.
const staticCustomerData = (customerList)=>{
    return {
        type: types.FETCH_CUSTOMERS_STATIC,
        payload:customerList
    }
}

//showing and hiding the customer form..
const showOrHideForm = (visibilityMode)=>{
    if (visibilityMode === 'SHOW') {
        return {
            type: types.SHOW_NEW_CUSTOMER_FORM
        }
    } else {
        return{
            type: types.HIDE_NEW_CUSTOMER_FORM
        }  
    }
}

//export these function
export{
    fetchCustomerDetails,
    addCustomerDetail,
    deleteCustomerDetail,
    toggleCustomerForm,
    fetchStaticCustomers
}