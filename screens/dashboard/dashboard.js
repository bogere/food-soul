import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View,Text, Image, ImageBackground } from 'react-native';
import { Card, Button, Icon,Input, Header,Divider} from 'react-native-elements'
import {createDrawerNavigator} from 'react-navigation'
import {connect} from 'react-redux'
import SideMenu from '../../components/sideMenu/sideMenu'
import {logoutUser} from '../../actions/authActions'
import styles from '../../constants/styles'
//other components...
//u shall put seperator navigation for dashboard.
import CustomerScreen from '../../screens/dashboard/customer';
//import SingleCustomer from './components/singleCustomer';

import OrderScreen from '../../screens/dashboard/order'
//import SingleOrder from './components/singleOrder'
import CatScreen from '../../screens/dashboard/cat'


const iconBoxArray = [
  {title: 'Customers', iconUrl: require('../../images/icons/customer.png') },
  {title: 'Orders', iconUrl: require('../../images/icons/orders.png')},
  {title: 'Suppliers', iconUrl: require('../../images/icons/customer.png')},
  {title: 'Insights', iconUrl: require('../../images/icons/dashboard.png')}
]

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

    goToGalio = ()=>{
      this.props.navigation.navigate('Galio');
    }

    //////////////////////////////////////
  render() {
    
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
        <ImageBackground
            source={require('../../images/background/ocean_sky.jpg')}
            style={{ flex: 1,
              width: null,
              height: null,
         }}>
           <View style = {{margin:200, marginLeft:10, marginRight:10, flex:1}}>
                <Button
                  backgroundColor='#03A9F4'
                  buttonStyle={styles.foodButtonDash}
                  title='Customers' 
                  onPress = {this.goToCustomers}/>
                 <Divider style={{ backgroundColor: 'blue' }} />
                <Button
                  backgroundColor='#03A9F4'
                  buttonStyle={styles.foodButtonDash}
                  title='Orders' 
                  onPress = {this.goToOrders}/>
                <Button
                  backgroundColor='#03A9F4'
                  buttonStyle={styles.foodButtonDash}
                  title='Suppliers' 
                  onPress = {this.goToOrders}/>
                <Button
                  backgroundColor='#03A9F4'
                  buttonStyle={styles.foodButtonDash}
                  title='Insights' 
                  onPress = {this.goToOrders}/>
                  <Button
                   backgroundColor='#03A9F4'
                   buttonStyle={styles.foodButtonDash}
                   title='Galio' 
                   onPress = {this.goToGalio}/>  
            </View>
        </ImageBackground>  
      
    );
  }
};



const mapStateToProps = (state)=>{
   return{
      currentUser: state.authReducer.currentUser
   }
}

export default connect(mapStateToProps,{
  logoutUser
})(Dashboard)

/*export default createDrawerNavigator(
  {
   Customers: CustomerScreen,
   Orders:OrderScreen,
   Cats:CatScreen
  },
  {
    contentComponent: SideMenu,
    drawerWidth:300
  }
);
*/
