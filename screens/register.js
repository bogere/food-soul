import React, {Component} from 'react'
import {Platform, StyleSheet,Text,ScrollView,TouchableHighlight,Alert, View} from 'react-native';
import { Card, ListItem, Button, Icon,Input } from 'react-native-elements'
import t from 'tcomb-form-native'
import {connect} from 'react-redux'
import {userSignUpFetch} from '../actions/authActions'
import styles from '../constants/styles'


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
      },
      gender:{ //remove it if it causes issues for u..
        nullOptions: {value : '', text: 'Choose your gender'}
      }
    }
  } // optional rendering options (see documentation)

  class Register extends Component{
   constructor(props){
       super(props)
       this.state = {
         
       }
       
   }

   registerAgent = ()=>{
       // call getValue() to get the values of the form
    var value = this.refs.myForm.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
      //Alert('Agent registered successful')
      const userObj = {
        username: 'hello',
        email: 'gold@ymail.com',
        password: '123bob'
      }
      this.props.userSignUpFetch(userObj)
      //yeah show the network problem.
      if (this.props.networkFailure) {
          this.showAlert("Network Failure occurred!!!")
      }
    }
   }

   showAlert(message){
     Alert.alert(message)
   }

   render(){
       /*if (this.props.networkFailure) {
          this.showAlert("Network Failure !!!!")
       }*/
       return (
        <ScrollView>
              <View style={styles.registerContainer}>
                 {/* display */}
                  <Form
                     ref="myForm"  type={Agent}
                     options={options}
                  />
                  <Button
                      backgroundColor='#03A9F4'
                      buttonStyle={styles.foodButton}
                      title='Register As AGENT' 
                      onPress = {this.registerAgent}/>
               </View>
        </ScrollView>
       )
   }
  }


  const mapStateToProps = (state)=>{
     return{
      signupSuccess: state.authReducer.signupSuccess,
      networkFailure: state.authReducer.networkFailure
     }
  }

  export default connect(mapStateToProps,{
    userSignUpFetch
  })(Register)

