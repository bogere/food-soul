import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'
import {connect} from 'react-redux'//connects React component with Redux store
import OrderList from '../../components/orderList';
import NewOrder from '../../components/addOrder';
//actions for orders.
import {
   fetchOrderDetails,addOrderDetail,
   deleteOrderDetail,fetchStaticOrders,
   addStaticOrder
}  from '../../actions/orderAction'



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

   componentDidMount(){
      this.props.fetchStaticOrders()
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

   addNewOrderDetail = (newOrder)=>{
        const newOrderDetail = {
           customer: newOrder.customer_id,
           food_image: 'yyy.jpg',
           food_name: '4 kgs of food'
        }

        this.props.addStaticOrder(newOrderDetail)

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
                     addNewOrder = {this.addNewOrderDetail}
                  />
                 :
                 <OrderList 
                     orders = {this.props.orders}
                     showForm = {this.showOrderForm}
                     seeOrderItem = {this.navigateOrderItem}
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
      orders: state.orderReducer.orders,
      errorResponse: state.orderReducer.errorResponse,
      showOrderForm:state.orderReducer.newOrderForm
   }
}

export default connect( mapStateToProps,{
   fetchOrderDetails,addOrderDetail,
   deleteOrderDetail,fetchStaticOrders,
   addStaticOrder
})(Order)