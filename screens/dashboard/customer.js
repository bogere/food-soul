import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View, Alert} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'
import {connect} from 'react-redux'//connects React component with Redux store
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
      //this.props.reduxIncreaseCounter(item)
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

//// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state)=>{
   console.log('State:', state);
   //console.log(state);
   // Redux Store --> Component
   return {
      counter: state.counter, //state.counterReducer.counter,
      loggedIn: state.loggedIn
   }
}

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers
//Then Modify The Data And Assign It To Your Props)
//==> connects Redux action to React component props.
const mapDispatchToProps = (dispatch)=>{
   //Action..
   //// Increase Counter
   reduxIncreaseCounter: (payload)=> dispatch({
      type: 'INCREASE_COUNTER',
      payload: payload
   })
   //// Decrease Counter
   reduxDecreaseCounter: (payload) => dispatch({
      type: 'DECREASE_COUNTER',
      payload: payload
   })
   //Login.
   reduxLogin: (payload)=> dispatch({
      type: 'LOGGED_IN',
      payload: payload
   })
}

export default  connect(mapStateToProps,mapDispatchToProps)(Customer)