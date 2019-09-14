
const ROOT_URL = 'http://localhost:3010/'

//Register the agent.
export function registerAgent(newAgent){
   return fetch(`${ROOT_URL}/registerAgent`,{
       method: 'POST',
       headers:{
         Accept: 'application/json',
       'Content-Type': 'application/json'
     },
     body:JSON.stringify(newAgent)
   })
   .then(res=> res.json())
}

//Login as agent.
export function loginAsAgent(loginDetails){
    return fetch(`${ROOT_URL}/login`, {
        method: 'POST',
        headers:{
          Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(loginDetails)  
    })
    .then(res=> res.json())
}