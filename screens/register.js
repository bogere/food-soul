import React, {Component} from 'react'
import {Platform, StyleSheet,Text, Alert, View} from 'react-native';
import { Card, ListItem, Button, Icon,Input } from 'react-native-elements'
import t from 'tcomb-form-native'

const Form = t.form.Form

//Enums are displayed as Picker s.
 const Gender = t.enums({
   'M': 'Male',
   'F': 'Female'
 })


//// here we are: define your domain model
const Agent = t.struct({
    firstName: t.String,//required string
    lastName: t.String,
    phoneNumber: t.Number,
    email: t.maybe(t.String), //optional field
    NationalIDNumber: t.String,
    gender: Gender, //displayed as picker
    password: t.String,
    date_of_birth: t.Date
})

//Under Android, use the fields option to configure which mode
// to display the Picker: --> date or time picker
let options = {
  fields: {
    date_of_birth:{
      mode: 'date' //// display the Date field as a DatePickerAndroid
    }
  }
} // optional rendering options (see documentation)

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
          loggedIn: false,
          username: '',
          value: {
             firstName: '',
             lastName: '',
             email: '',
             password: '',
             phoneNumber: '', //what is default for number
             NationalIDNumber: '',
             gender: ''

          }
        }
     }

     registerAgent(){
       // call getValue() to get the values of the form
        let value = this.refs.registerForm.getValue()
       //let value = this.formRef.getvalue()
       if (value) { // if validation fails, value will be null
        //console.log(value); // value here is an instance of Agent
        Alert('yeah u have submitted!!!')
       }
     }

     

     handleChange(value){
        this.setState({value})
     }


     ///////////////////
     render(){
         return(
             <ScrollView>
                <Card  title = "REGISTER AS AGENT">
                <Form ref= "registerForm"
                       type={ Agent} 
                       options={options}
                     />
                   <Button
                     icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='REGISTER ' 
                     onPress = {this.registerAgent.bind(this)}/>
                </Card>
             </ScrollView>
         )
     }
}


export default Register