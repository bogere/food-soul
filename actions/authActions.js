

//Action creators for Authentication..
import * as types from './action_types'


//login the user.. API request call for login
//When a user’s object is saved to the state and their token is saved to
// localStorage, you can consider your user logged in.
const userLoginFetch = (user)=>{
   return dispatch =>{
       return fetch('http://localhost:3000/api/v1/login',{
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({user})
       })
       .then(response => response.json())
       .then(data =>{
           if (data.message) {
            // Here you should have logic to handle invalid login credentials.
            // This assumes your Rails API will return a JSON object with a key of
            // 'message' if there is an error
            } else {
              localStorage.setItem("token", data.jwt)
              dispatch(loginUserSuccess(data.user))
          }
       })
   }
}

const loginUserSuccess = userObj => ({
    type: types.LOGIN_USER_SUCCESS,
    payload: userObj
})

const loginUserFailure = errorObj =>({
    type: types.LOGIN_USER_FAILED,
    payload:errorObj
})

//API for signig up the user.
const userSignUpFetch = (user)=>{
   return dispatch=>{
       return fetch('http://localhost:3000/api/v1/register',{
           method: 'post',
           headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({user})
       })
       .then(response => response.json())
       .then(data=>{
           if (data.success === true) {
              dispatch(signUserSuccess(data.user))  
           } else {
               dispatch(signUpFailure(data.error)) 
           }
       })
   }
}

//signup success.
const signUserSuccess = userObj =>({
    type: types.SIGNUP_SUCCESS,
    payload: userObj
 })

 //signUp failure.
 const signUpFailure = errorObj =>({
     type: types.SIGNUP_FAILURE,
     payload: errorObj
 })

//logout the user.
const logoutUser = () =>dispatch =>{
    //first clear the user token from the local storage
   window.localStorage.removeItem("token")
   return dispatch({
       type:types.LOGOUT_USER
   })
}


export{
    logoutUser,
    userLoginFetch,
    userSignUpFetch
}

//https://levelup.gitconnected.com/using-jwt-in-your-react-redux-app-for-authorization-d31be51a50d2
//also the eddie secure region codebase is also great for learning