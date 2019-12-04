
const ROOT_URL = 'http://192.168.8.101:4000' //use server IP address not localhost 
//becoz localhost refers to android device in which code runs


export function loadCustomers(agentId){
    return fetch(`${ROOT_URL}/customers`)
               .then(res=>res.json())

}

export function addCustomer(newCustomer){
    return fetch(`${ROOT_URL}/customers`, {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(newCustomer)
    })
     .then(res=>res.json())
}