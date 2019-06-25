import React, {Component} from 'react'
import {Platform, StyleSheet,Text,Button,Image, View} from 'react-native';
import {List, ListItem, Icon} from 'react-native-elements'
import {createDrawerNavigator} from 'react-navigation';

//handling the drawer navigation on  RN..
class DashboardScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'Dashboard',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icons/dashboard-48.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
       <View>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
        <Text>hello wait for food soul</Text>
       </View>
      );
    }
  }

  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icons/customer-64.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });


  const MyApp = createDrawerNavigator({
    Home: {
      screen: DashboardScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  });

  export default MyApp