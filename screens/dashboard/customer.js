import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'
//import t from 'tcomb-form-native'
import CustomerList from '../../components/customerList';
import NewCustomer from '../../components/addCustomer'
import {loadCustomers} from '../../services/customers'

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


class Customer extends Component{
    
   constructor(props){
      super(props)
      this.state = {
         newCustomerForm: false
      }
      //bind the fucntions in the constructor instead of render method.. optimisation.
      this.showCustomerForm = this.showCustomerForm.bind(this)
      this.hideCustomerForm = this.hideCustomerForm.bind(this)
      this.navigateCustomerItem = this.navigateCustomerItem.bind(this)
   }

   componentDidMount(){
         loadCustomers()
           .then(result=>{
                console.log(result)
           })
           .catch(err=>{
             console.log(err)
           })
   }

   showCustomerForm(){
      this.setState({
         newCustomerForm: true
      })
   }
   hideCustomerForm(){
      this.setState({
         newCustomerForm: false
      })
      console.log('hey hide the customer form')
   }
   navigateCustomerItem(item){
      console.log('let see specific customer', item)
      this.props.navigation.navigate('SingleCustomer', {item})
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
                  <NewCustomer 
                     hideForm = {this.hideCustomerForm}
                  />
                 :
                 <CustomerList 
                     users = {users}
                     showForm = {this.showCustomerForm}
                     seeCustomerItem = {this.navigateCustomerItem}
                   />
               }
             
           </View>

             
        )
    }
}

export default  Customer