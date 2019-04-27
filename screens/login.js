import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View} from 'react-native';
import { Card, ListItem, Button, Icon,Input } from 'react-native-elements'

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

    }

     ///////////////////
     render(){
         return(
             <View>
                 <Card  title = "WELCOME TO SOUL FOOD">
                      <Input  placeholder='Enter username'
                        label = 'Username'
                        onChangeText = {this.handleInputText.bind.this}
                        />
                       <Input  placeholder='Enter password'
                          label = 'password'
                          onChangeText = {this.handleInputText.bind.this}
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