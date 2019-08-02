//retrieving the customer list for that agent.


//jax(  url: "https://reqres.in/api/users?page=1",
export function loadCustomers(agentId){
    return fetch(`https://reqres.in/api/users?page=1`)
               .then(res=>res.json())
}