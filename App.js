/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './screens/home'
import LoginScreen from './screens/login'
import RegisterScreen from './screens/register'

import DashboardScreen from './screens/dashboard/dashboard';

//u shall put seperator navigation for dashboard.
import CustomerScreen from './screens/dashboard/customer';
import SingleCustomer from './components/singleCustomer';

import OrderScreen from './screens/dashboard/order'
import SingleOrder from './components/singleOrder'
//import CatScreen from './screens/dashboard/cat'
import GalioScreen from './components/galio_parts/home'


export default createStackNavigator({
  Home: {screen: HomeScreen},
  Login : {screen: LoginScreen},
  Register : {screen: RegisterScreen},
  Dashboard: {screen: DashboardScreen},
  Customers: {screen: CustomerScreen},
  SingleCustomer: {screen:SingleCustomer},
  Orders: {screen: OrderScreen},
  SingleOrder:{screen: SingleOrder},
  //Cats:{screen: CatScreen}
  Galio:{screen: GalioScreen }
})