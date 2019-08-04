import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import t from 'tcomb-form-native'


const Form = t.form.Form;

//slect options for status
const OrderStatus = t.enums({
    'pending': 'pending',
    'approved': 'approved',
    'rejected' : 'rejected'
})
//define the domain models for ur form..
const OrderModel = t.struct({
    customer_id: t.String, //reference to customer
    status: OrderStatus,//enum
    //agent_id: t.String, //reference 
    supplier_id: t.String //reference to supplier
})

const options = {
    fields:{
        customer_id:{
            label: 'Customer',
            placeholder: 'Select the customer',
            error: 'Customer field is required'
        },
        status:{
            label: 'Order Status',
            placeholder: 'Select the status of order',
            error: 'Order Status is required'
        },
        supplier_id:{
            label: 'Suppplier',
            placeholder: 'Select the supplier',
            error: 'Supplier is required'
        }
    }
}

class AddOrder extends Component{
    constructor(props){
       super(props)
       this.state = {
          value: {
              status: 'approved',
              agent_id: '',
              customer_id: '',
              supplier_id: ''
          }
       }
       //bind functions inside constructor .. optimisation purposes.
       this.submitOrder = this.submitOrder.bind(this)
       this.handleChange = this.handleChange.bind(this)
    }


    submitOrder(){
        // call getValue() to get the values of the form
        let value = this.refs.OrderForm.getValue()
        if (value) { //if validation fails, value will be null
           console.log('validated values', value) 
        }
    }

    handleChange(value){
      this.setState({value})
    }


    ////////////////////
    render(){
      return (
          <View>
              <Card title = "ADD ORDER">
                <Form
                   ref = "OrderForm"
                   type = {OrderModel}
                   options = {options}
                   value = {this.state.value}
                   onChange = {this.handleChange} 
                 />
                 <Button
                     icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='ADD ORDER' 
                     onPress = {this.submitOrder}/>
              </Card>
          </View>
      )
    }
}



export default AddOrder