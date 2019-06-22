/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//import {createStackNavigator,createAppContainer} from 'react-navigation';//v3
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './screens/home'
import LoginScreen from './screens/login'
import RegisterScreen from './screens/registerTest'

import DashboardScreen from './screens/dashboard3';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


//catering for react navigation..
/*const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Login : {screen: LoginScreen},
  Register : {screen: RegisterScreen},
  Dashboard: {screen: DashboardScreen} 
})*/

//const App = createAppContainer(MainNavigator)//create app container to wrap the root navigator


/*class App extends Component{
  render(){
    return (
      <View>
        <Text>Hello react navigation XXXXXXX</Text>
      </View>
    )
  }
}*/
//export default App
export default createStackNavigator({
  Home: {screen: HomeScreen},
  Login : {screen: LoginScreen},
  Register : {screen: RegisterScreen},
  Dashboard: {screen: DashboardScreen} 
})