import React, {Component} from 'react'
import {Platform, StyleSheet,Text,ScrollView,TouchableHighlight,Alert, View} from 'react-native';
import { Card, ListItem, Button, Icon,Input } from 'react-native-elements'
import t from 'tcomb-form-native'

const Form = t.form.Form

//Enums are displayed as Picker s.
 const Gender = t.enums({
   'M': 'Male',
   'F': 'Female'
 })

 

 // here we are: define your domain model
var Agent = t.struct({
    firstName: t.String,//required string
    lastName: t.String,
    phoneNumber: t.Number,
    email: t.maybe(t.String), //optional field
    NationalIDNumber: t.String,
    gender: Gender, //displayed as picker
    password: t.String,
    DateOfBirth: t.Date
  });
  
  //var options = {}; // optional rendering options (see documentation)
  //Under Android, use the fields option to configure which mode
// to display the Picker: --> date or time picker
let options = {
    fields: {
        DateOfBirth:{
        mode: 'date' //// display the Date field as a DatePickerAndroid
      },
      password: {
            placeholder: 'Enter your password',
            error: 'password is empty',
            secureTextEntry: true,
            password: true
      }
    }
  } // optional rendering options (see documentation)

  class Register extends Component{
   constructor(props){
       super(props)
       this.state = {

       }
       //It's better to move it outside the render to avoid binding each time the component renders.
       this.onPress = this.onPress.bind(this)
   }

   onPress(){
       // call getValue() to get the values of the form
    var value = this.refs.myForm.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
      //Alert('Agent registered successful')
    }
   }

   render(){
       return (
        <ScrollView>
             <View style={styles.container}>
              {/* display */}
             <Form
              ref="myForm"
              type={Agent}
              options={options}
            />
           <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Save</Text>
           </TouchableHighlight>
          </View>
        </ScrollView>
       )
   }
  }


  var styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    },
    button: {
      height: 36,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  });

  export default  Register