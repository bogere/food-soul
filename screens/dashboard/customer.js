import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View, Alert} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'
//import t from 'tcomb-form-native'
import CustomerList from '../../components/customerList';
import NewCustomer from '../../components/addCustomer'
import {loadCustomers} from '../../services/customers'




class Customer extends Component{
    
   constructor(props){
      super(props)
      this.state = {
         newCustomerForm: false,
         customers:[]
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
                this.setState({
                   customers:result.customers
                })
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
                     users = {this.state.customers}
                     showForm = {this.showCustomerForm}
                     seeCustomerItem = {this.navigateCustomerItem}
                   />
               }
             
           </View>

             
        )
    }
}

export default  Customer