import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View, FormInput} from 'react-native';
//import { Card,Form, Button } from '@99xt/first-born'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: "column",
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexDirection: "column"
  }
});


class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
          //loggedIn: false
          firstName: ''
        }
     }

     checkInputValidity = (text) => {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(text);
    }

    handleTextChange(e){
      const {value} = e.target
      this.setState({firstName: value })
    }

     //dealing with register form..
     formElements = [
        {
          label: 'First Name',
          type: 'text',
          onChangeText: (value) => this.handleTextChange(value),
          placeholder: 'Enter your first name'
        },
        {
          label: 'Last Name',
          type: 'text',
          onChangeText: (value) => this.handleTextChange(value),
          placeholder: 'Enter your last name'
        },
        {
          label: 'Phone number',
          type: 'text',
          onChangeText: (value)=>this.handleTextChange(value),
          placeholder: 'Enter phone number'
        },
        {
          label: 'Join Date',
          type: 'date',
          onDateChange:(value) => this.handleDateChange(value)
        },
        {
          label: 'Email Address',
          type: 'text',
          onChangeText: (value) => this.handleTextChange(value),
           placeholder: "john.doe@gmail.com",
          isValid: (value) => this.checkInputValidity(value)
        }

     ]

     ///////////////////
     render(){
         return(
             <View>
                <Card title = "LOGIN"  description= "Login as Agent" image = {require('../images/food.jpg')}>
                </Card>
                <FormInput onChangeText={this.handleTextChange.bind(this)} 
                          value = {this.state.firstName} label="Name" />
             </View>
         )
     }
}



export default Register

