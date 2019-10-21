import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View, Alert} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'
import {connect} from 'react-redux'//connects React component with Redux store
import CustomerList from '../../components/customerList';
import NewCustomer from '../../components/addCustomer'
import {fetchCustomerDetails,addCustomerDetail,deleteCustomerDetail} from '../../actions/customerActions'



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
         this.props.fetchCustomerDetails()
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
      //console.log('accessing redux store', this.props.counter)
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
                     users = {this.props.customers}
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
   // Redux Store --> Component
   return {
      customers: state.customerReducer.customers,
      errorResponse: state.customerReducer.errorResponse
   }
}

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers
//Then Modify The Data And Assign It To Your Props)
//==> connects Redux action to React component props.



export default  connect(mapStateToProps, {
   fetchCustomerDetails,addCustomerDetail,
   deleteCustomerDetail
})(Customer)