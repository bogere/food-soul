import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View, Alert} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'
import {connect} from 'react-redux'//connects React component with Redux store
import CustomerList from '../../components/customerList';
import NewCustomer from '../../components/addCustomer'
import {
         fetchCustomerDetails,addCustomerDetail,
         deleteCustomerDetail,toggleCustomerForm,
         fetchStaticCustomers,addStaticCustomer
       } 
      from '../../actions/customerActions'



class Customer extends Component{
    
   constructor(props){
      super(props)
      this.state = {
         newCustomerForm: false,
         customers:[]
      }
      //bind the fucntions in the constructor instead of render method.. optimisation.
      this.navigateCustomerItem = this.navigateCustomerItem.bind(this)
   }

   componentDidMount(){
         //this.props.fetchCustomerDetails("agent1")
         //static data for teh customers.
         this.props.fetchStaticCustomers()
   }

   showCustomerForm = () =>{
       const visibilityMode = 'SHOW'
       this.props.toggleCustomerForm(visibilityMode)
   }
   hideCustomerForm = ()=>{
      const visibilityMode = 'HIDE'
      this.props.toggleCustomerForm(visibilityMode)
   }

   navigateCustomerItem(item){
      console.log('let see specific customer', item)
      
      this.props.navigation.navigate('SingleCustomer', {item})
   }

   addNewCustomer = (customerDetail)=>{

      let avatarNo = Math.floor((Math.random() * 100) + 1);
     const newCustomer = {
         name: customerDetail.firstName,
         avatar_url: `https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/${avatarNo}.jpg`,
         subtitle: customerDetail.lastName
     }
     //debugger
     //this.props.addCustomerDetail(newCustomer) //online API.
     this.props.addStaticCustomer(newCustomer)
   }

   removeCustomer = (customer)=>{
       this.props.deleteCustomerDetail(customer)
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
                this.props.showCustomerForm === true ?
                  <NewCustomer 
                     hideForm = {this.hideCustomerForm}
                     addNewCustomer = {this.addNewCustomer}
                  />
                 :
                 <CustomerList 
                     customers = {this.props.customers}
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
      errorResponse: state.customerReducer.errorResponse,
      showCustomerForm:state.customerReducer.newCustomerForm
   }
}

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers
//Then Modify The Data And Assign It To Your Props)
//==> connects Redux action to React component props.



export default  connect(mapStateToProps, {
   fetchCustomerDetails,addCustomerDetail,
   deleteCustomerDetail, toggleCustomerForm,
   fetchStaticCustomers,addStaticCustomer
})(Customer)