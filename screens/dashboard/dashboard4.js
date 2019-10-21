import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View,Text, Image } from 'react-native';
import { Card, Button, Icon,Input, Header,Divider} from 'react-native-elements'
import {connect} from 'react-redux'
import {logoutUser} from '../../actions/authActions'

 class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
        this.goToCustomers = this.goToCustomers.bind(this)
        this.goToOrders = this.goToOrders.bind(this)
    }

    componentDidMount(){
      // if it is not logged in.
      if (!this.props.currentUser) {
         //this.props.navigation.goBack()
         this.props.navigation.navigate('Home')
      }
    }
     
    goToCustomers(){
        this.props.navigation.navigate('Customers')
    }

    goToOrders(){
        this.props.navigation.navigate('Orders')
    }
    goToCats = ()=>{
      this.props.navigation.navigate('Cats')
    }

    goToLogout = ()=>{
      this.props.logoutUser()
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
               <Divider style={{ backgroundColor: 'blue' }} />
          <Button
             icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Orders' 
               onPress = {this.goToOrders}/>
          <Button
             icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Cats' 
               onPress = {this.goToCats}/>
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

const mapStateToProps = (state)=>{
   currentUser: state.authReducer.currentUser
}

export default connect(mapStateToProps,{
  logoutUser
})(Dashboard)
