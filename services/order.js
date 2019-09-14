const ROOT_URL = `http://localhost:3010`

//loading the orders..by agent
export function loadOrders(agentId){
  return fetch(`${ROOT_URL}/orders/${agentId}`)
             .then(res=>res.json())
}

//Add the orders by the agent.
export function addOrder(newOrder){
   return fetch(`${ROOT_URL}/orders/`, {
       method: 'POST',
       headers:{
           "Content-type": "application/json"
       },
       body: JSON.stringify(newOrder)
   })
   .then(res=>res.json())
}
