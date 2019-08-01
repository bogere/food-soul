import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View,Text, Image } from 'react-native';
import { Card, Button, Icon,Input, Header} from 'react-native-elements'

export default class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
        this.goToCustomers = this.goToCustomers.bind(this)
        this.goToOrders = this.goToOrders.bind(this)
    }
     
    goToCustomers(){
        this.props.navigation.navigate('Customers')
        //console.log('ready to roll to customers page')
    }

    goToOrders(){
        //this.props.navigation.navigate('Orders')
        console.log('hey i want to see the orders')
    }

    //////////////////////////////////////
  render() {
    
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
    <View>
        <Button
             icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Customers' 
               onPress = {this.goToCustomers}/>
    </View>
      
      
    );
  }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})
