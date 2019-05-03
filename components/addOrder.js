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
    //status: t.String, //pending, approved /select box
    status: OrderStatus,//enum
    agent_id: t.String, //reference 
    customer_id: t.String, //reference to customer
    supplier_id: t.String //reference to supplier
})

class AddOrder extends Component{
    constructor(props){
       super(props)
       this.state = {
          value: {
              status: '',
              agent_id: '',
              customer_id: '',
              supplier_id: ''
          }
       }
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
                   value = {this.state.value}
                   onChange = {this.handleChange} 
                 />
                 <Button
                     icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='ADD ORDER' 
                     onPress = {this.submitOrder.bind(this)}/>
              </Card>
          </View>
      )
    }
}



export default AddOrder