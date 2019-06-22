import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View} from 'react-native';
import { Card, ListItem, Button, Icon,Input } from 'react-native-elements'
import t from 'tcomb-form-native'

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

     handleInputText(e){
        const {name, value} = e.target
        this.setState({[name]: value})
    }
    loginAsAgent(e){
        let self = this
        var value = self.refs.myForm.getValue()
        if(value){
          console.log('yeah u can now login', value)
          //navigate to the dashboard page.. if login is successful
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
                       buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                       title='LOGIN ' 
                        onPress = {this.loginAsAgent.bind(this)}/>
                </Card>
             </View>
         )
     }
}

export default Login