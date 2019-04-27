import React, {Component} from 'react'
import {Platform, StyleSheet,Text, Alert, View} from 'react-native';
import { Card, ListItem, Button, Icon,Input } from 'react-native-elements'

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
          loggedIn: false,
          username: ''
        }
     }

     registerAgent(e){
         e.preventDefault()
        //console.log(this.state.username)
        alert(this.state.username)
     }

     /*handleInputText(e){
          const {name, value} = e.target
          this.setState()
     }*/
     handleInputText(e){
         const {name, value} = e.target
         this.setState({[name]: value})
     }

     ///////////////////
     render(){
         return(
             <View>
                <Card  title = "REGISTER AS AGENT">
                <Input  placeholder='Enter firstName'
                        label = 'First Name'
                        onChangeText = {this.handleInputText.bind.this}
                    />
                <Input  placeholder='Enter Last Name'
                        label = 'Last Name'
                        onChangeText = {this.handleInputText.bind.this}
                    />
                <Input  placeholder='Enter phone number'
                        label = 'Phone Number'
                        onChangeText = {this.handleInputText.bind.this}
                    />
                <Input  
                        label = 'Email address'
                        onChangeText = {this.handleInputText.bind.this}
                    />
                <Input  
                        label = 'National ID Number (NIN)'
                        onChangeText = {this.handleInputText.bind.this}
                    />
                <Input  
                        label = 'Password'
                        onChangeText = {this.handleInputText.bind.this}
                    />
                   <Button
                     icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='REGISTER ' 
                     onPress = {this.registerAgent.bind(this)}/>
                </Card>
             </View>
         )
     }
}


export default Register