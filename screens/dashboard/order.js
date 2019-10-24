import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'
import OrderList from '../../components/orderList';
import NewOrder from '../../components/addOrder';

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
      subtitle: 'President',
      email: 'xxxxVVVV@yahoo.com'
    }
   ]


class Order extends Component{
    
   constructor(props){
      super(props)
      this.state = {
         newOrderForm: false
      }
      //bind the fucntions in the constructor instead of render method.. optimisation.
      this.showOrderForm = this.showOrderForm.bind(this)
      this.hideOrderForm = this.hideOrderForm.bind(this)
      this.navigateOrderItem = this.navigateOrderItem.bind(this)
   }

   showOrderForm(){
      this.setState({
         newOrderForm: true
      })
   }
   hideOrderForm(){
      this.setState({
         newOrderForm: false
      })
   }
   navigateOrderItem(item){
      this.props.navigation.navigate('SingleOrder', {item})
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
                this.state.newOrderForm ?
                  <NewOrder 
                     hideForm = {this.hideOrderForm}
                  />
                 :
                 <OrderList 
                     users = {users}
                     showForm = {this.showOrderForm}
                     seeOrderItem = {this.navigateOrderItem}
                   />
               }
             
           </View>

             
        )
    }
}

export default  Order