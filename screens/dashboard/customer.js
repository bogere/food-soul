import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'
import t from 'tcomb-form-native'
import CustomerList from './customerList';
import NewCustomer from './addCustomer'

const users = [
    {
       name: 'brynn',
       avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
       subtitle: 'President',
       email: 'goldsoft@gmail.com'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
      email: 'yyyyy@gmail.com'
    },
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      email: 'xxxxxx@gmail.com'
    }
   ]


class Customer extends Component{
    
   constructor(props){
      super(props)
      this.state = {
         newCustomerForm: false
      }
   }
   ///////////////////
    render(){
        return (
          <View>
             <Header
               leftComponent={{ icon: 'menu', color: '#fff' }}
               centerComponent={{ text: 'SOUL FOOD', style: { color: '#fff' } }}
               rightComponent={{ icon: 'home', color: '#fff' }}
             />
             {
                this.state.newCustomerForm ?
                  <NewCustomer/>
                 :
                 <CustomerList users = {users} />
               }
             
           </View>

             
        )
    }
}

export default  Customer