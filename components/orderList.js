import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View,Image,TouchableHighlight} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'
import styles from '../constants/styles'
const helloImage = require('../images/food/maize.jpg') 

class OrderList extends Component{
    render(){
        return (
            <Card title="Customer Orders">
              {
                this.props.orders.map((order, i) => {
                  return (
                    <ListItem
                       key={i}
                       leftAvatar={{ source: { uri: order.food_image } }}
                       title={order.customer}
                       subtitle={order.food_name}
                       onPress = {()=>this.props.seeOrderItem(order)}
                       bottomDivider
                    />
                    );
                 })
               }
             <Button
                     icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={styles.foodButton}
                      title='New Order' 
                      onPress = {this.props.showForm}/>
          </Card>
        )
    }
}




export default OrderList