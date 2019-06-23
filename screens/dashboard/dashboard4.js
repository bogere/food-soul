import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View,Text, Image } from 'react-native';

export default class JustifyContentBasics extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
        this.goToCustomers = this.goToCustomers.bind(this)
        this.goToOrders = this.goToOrders.bind(this)
    }
     
    goToCustomers(){
        this.props.navigation.navigate('customers')
    }

    goToOrders(){
        this.props.navigation.navigate('orders')
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
      <View style = {styles.container}>
        <View style={{width: 80, height: 100, backgroundColor: 'powderblue'}}>
          <Image source={pic} style={{width: 50, height: 50}} onPress = {this.goToCustomers} />
          <Text>Customers</Text>  
        </View>
        <View style={{width: 80, height: 100, backgroundColor: 'powderblue'}}>
          <Image source={pic} style={{width: 50, height: 50}} onPress = {this.goToOrders}/>
          <Text>Orders</Text>  
        </View>
      </View>
      <View  style = {styles.container}>
        <View style={{width: 80, height: 100, backgroundColor: 'powderblue'}}>
          <Image source={pic} style={{width: 50, height: 50}}/>
          <Text>Customers</Text>  
        </View>
        <View style={{width: 80, height: 100, backgroundColor: 'powderblue'}}>
          <Image source={pic} style={{width: 50, height: 50}}/>
          <Text>Orders</Text>  
        </View>
      </View>
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
