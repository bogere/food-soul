
//const ROOT_URL =   `http://104.238.158.44:3010`
const ROOT_URL = `http://192.168.8.100:4000`


export function loadCustomers(agentId){
    return fetch(`http://localhost:4000/participants/1234`)
               .then(res=>res.json())

}

export function addCustomer(newCustomer){
    return fetch(`${ROOT_URL}/customers`, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(newCustomer)
    })
     .then(res=>res.json())
}