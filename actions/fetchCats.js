//action creators..
//./actions/fetchCats.js

/*Helper functions. remember, we have 3 action types so far,
 these functions return a plain object that has a 
type attribute that our reducer can handle.
in case of success request, 
the action has a payload property as well. 
That's the response cat from the server 
that we have requested*/

import * as types from './action_types'

const  fetchCatsError = ()=>{
    return {type:  types.FETCH_CATS_ERROR}
}

const fetchCatsStarted = ()=>{
    return { type: types.FETCH_CATS_START}
}

const fetchCatsSuccess = (cat)=>{

    return { type: types.FETCH_CATS_SUCCESS, payload:cat }
}

const addNewCat = (newCat)=>{
    return { type: types.ADOPT_CAT_SUCCESS, payload: newCat}
}
const chaseCatAway = (catInfo)=>{
    return {type: types.CHASE_CAT_SUCCESS, payload:catInfo}
}

// fetching a random cat starts now.. REST API.
const fetchCats = ()=> dispatch =>{
   dispatch(fetchCatsStarted())

   fetch("https://api.thecatapi.com/v1/images/search", {
       headers:{
        "Content-Type": "application/json",
        "x-api-key": "7362ed7f-2894-4cd9-b76d-fa25f6e940f1"  
       }
   })
   .then( catResponse => catResponse.json())
   .then(cat => dispatch(fetchCatsSuccess(cat)))
   .catch(err=> dispatch(fetchCatsError()))
}

//what about Adding a new cat to ur store.
const adoptCat = (newCat)=> dispatch =>{
    dispatch(addNewCat(newCat)) 
}

//what about deleting cats from place.
const removeCat = (catInfo)=>dispatch =>{
   /*return dispatch({
        type: types.CHASE_CAT_SUCCESS,
        payload:catInfo
   })*/
   dispatch(chaseCatAway(catInfo))
}

//export default fetchCats
export {
    fetchCats,
    adoptCat,
    removeCat
}