import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View} from 'react-native';
import { Card, ListItem, Button, Icon,Divider} from 'react-native-elements'
import styles from '../constants/styles'


class Home extends Component{
   
  constructor(props){
     super(props)
     this.state = {
       loggedIn: false
     }
  }
  goToRegister(){
     this.props.navigation.navigate('Register')
  }

  goToLogin(){
    //console.log('u r visiting the login page')
    this.props.navigation.navigate('Login')
  }

  //////////////////////
    render(){
       return (
        <View>
                <Card
                    title='WELCOME TO SOUL FOOD'
                     image={require('../images/food.jpg')}>
                   <Text style={styles.foodText}>
                      Your next glosaries are just one phone call away
                       Get an agent and make a call each time you need something from the market 
                     The Prices are the same (even less at times)
                   </Text>
                  <Button
                     icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={ styles.foodButton}
                      title='Register As AGENT' 
                     onPress = {this.goToRegister.bind(this)}/>
                      
                  <Button
                     icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={styles.foodButton}
                      title='LOGIN ' 
                     onPress = {this.goToLogin.bind(this)}/>
                </Card>
         </View>
       )
    }
}

export default Home