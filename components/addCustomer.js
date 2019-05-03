import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import t from 'tcomb-form-native'


const Form = t.form.Form;
//define the domain models for ur form..
const Customer = t.struct({
    first_name: t.String,
    last_name: t.String,
    email: t.String,
    phone_number: t.Number,
    agent_id: t.String //must be reference to the agent_id
})

class AddCustomer extends Component{
    constructor(props){
       super(props)
       this.state = {
          value: {
              first_name: '',
              last_name: '',
              email: '',
              phone_number: '', //what is default value for number
              agent_id: ''
          }
       }
    }


    registerCustomer(){
        // call getValue() to get the values of the form
        let value = this.refs.CustomerForm.getValue()
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
              <Card title = "ADD CUSTOMER">
                <Form
                   ref = "CustomerForm"
                   type = {Customer}
                   value = {this.state.value}
                   onChange = {this.handleChange} 
                 />
                 <Button
                     icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='ADD CUSTOMER' 
                     onPress = {this.registerCustomer.bind(this)}/>
              </Card>
          </View>
      )
    }
}



export default AddCustomer