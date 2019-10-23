import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View, Alert} from 'react-native';
import { Card, ListItem, Button, Icon,Input } from 'react-native-elements'
import t from 'tcomb-form-native'
import {connect} from 'react-redux'
import {userLoginFetch} from '../actions/authActions'
import styles from '../constants/styles'

const Form = t.form.Form
// here we are: define your domain model
const Person = t.struct({
   email: t.String,
   password: t.String
})

//customising ur input fields..
let options = {
    order: ['email', 'password'],
    fields:{
         email: {
            placeholder: 'enter your email address',
            error: 'Email is empty'
        },
        password:{
            placeholder: 'Enter your password',
            error: 'password is empty',
            secureTextEntry: true,
            password: true
        }
    }

};

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
          loggedIn: false
        }
     }
      

    loginAsAgent = ()=>{
        let self = this
        var value = self.refs.myForm.getValue()
        if(value){
          console.log('yeah u can now login', value)
           self.props.userLoginFetch(value)
          //navigate to the dashboard page.. if login is successful
          /*if (self.props.authenticated === true) {
            self.props.navigation.navigate('Dashboard') 
          } else {
              Alert.alert("Invalid username/password")
          }*/
          self.props.navigation.navigate('Dashboard')

        }
    }
    

     ///////////////////
     render(){
         return(
             <View>
                 <Card  title = "WELCOME TO SOUL FOOD">
                       <Form ref = "myForm"
                          type = {Person}
                          options = {options}
                        />
                       <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={styles.foodButton}
                        title='LOGIN ' 
                        onPress = {this.loginAsAgent}/>
                </Card>
             </View>
         )
     }
}

const mapStateToProps = (state)=>{
   return{
      authenticated: state.authReducer.authenticated,
      loginError: state.authReducer.loginError,
      networkFailure:state.authReducer.networkFailure
   }
}

export default connect(mapStateToProps,{
   userLoginFetch  
})(Login)