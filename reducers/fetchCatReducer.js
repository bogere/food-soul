//Reducer --> takes in 2 parameters(copy of current state + action payload)
// to calculate the next state of the app.

import * as types from '../actions/action_types'

const initialState = {
     cats:[]
}

//some utility functions
//updating the Item in Array.
//Updating one item in an array can be accomplished by using Array.map, 
//returning a new value for the item we want to update, and returning 
//the existing values for all other items:
 function updateObjectInArray(array, action){
      console.log('ArrayItems', array)
   return array.map((item,index)=>{
       if (index !== action.index) {
            // This isn't the item we care about - keep it as-is
            return item
       }
        // Otherwise, this is the one we want - return an updated value
        return{
             ...item,
             ...action.item
        }
   })
 }



const fetchCatReducer = (state = initialState, action)=>{
     switch (action.type) {
         //// HTTP request was successful, we must update the state.
        case types.FETCH_CATS_SUCCESS: 
             return {
                  ...state,
                  loading:false,
                  //cats: state.cats = action.payload
                  cats:action.payload
             }
             break;
        //HTTP request has been started, this is the right place to for example display a busy indicator to the user.
        case types.FETCH_CATS_START: // loading button
             return {
                  ...state,
                  loading: true
             }
             break;
        //HTTP request has failed. You can show an error component or something.
        case types.FETCH_CATS_ERROR:
             return {
                  ...state,
                  loading:false,
                  error: 'Failed to load the cats records'
             }
             break;
        case types.ADOPT_CAT_SUCCESS:
             return {
                  ...state,
                  cats:[...state.cats, action.payload]  // OR.
                  //cats: state.cats.concat(action.payload)  //impure    
             }
             break;
        case types.CHASE_CAT_SUCCESS:
             return{
                  ...state,
                cats: state.cats.filter(item => item !== action.payload)
             }
             break;
        case types.UPDATE_CAT_SUCCESS:
             return updateObjectInArray(state.cats, action)
             break;
         
         default:
             return state
             break;
     }
}

export default fetchCatReducer