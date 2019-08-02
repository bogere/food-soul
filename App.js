/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './screens/home'
import LoginScreen from './screens/login'
import RegisterScreen from './screens/registerTest'

import DashboardScreen from './screens/dashboard/dashboard4';

//u shall put seperator navigation for dashboard.
import CustomerScreen from './screens/dashboard/customer';
import SingleCustomer from './components/singleCustomer';

//import OrderScreen from './screens/dashboard/order'


export default createStackNavigator({
  Home: {screen: HomeScreen},
  Login : {screen: LoginScreen},
  Register : {screen: RegisterScreen},
  Dashboard: {screen: DashboardScreen},
  Customers: {screen: CustomerScreen},
  SingleCustomer: {screen:SingleCustomer}
  //Orders: {screen: OrderScreen} 
})