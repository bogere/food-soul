import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


class Home extends Component{
   
  constructor(props){
     super(props)
     this.state = {
       loggedIn: false
     }
  }
  goToRegister(){
     console.log('u r visiting the register page..')
  }

  goToLogin(){
    console.log('u r visiting the login page')
  }

  //////////////////////
    render(){
       return (
        <View>
                <Card
                    title='WELCOME TO SOUL FOOD'
                     image={require('../images/food.jpg')}>
                   <Text style={{marginBottom: 10}}>
                      Your next glosaries are just one phone call away
                       Get an agent and make a call each time you need something from the market 
                     The Prices are the same (even less at times)
                   </Text>
                  <Button
                     icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Register As AGENT' 
                     onClick = {this.goToRegister.bind(this)}/>
                  <Button
                     icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='LOGIN ' 
                     onClick = {this.goToLogin.bind(this)}/>
                </Card>
         </View>
       )
    }
}

export default Home