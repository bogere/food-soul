import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View,Image,TouchableHighlight} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'
import styles from '../constants/styles'


class CustomerList extends Component{
    render(){
        return (
            <Card title="Customer List">
              {
                this.props.customers.map((customer, i) => {
                  return (
                    <ListItem
                      key={i}
                      leftAvatar={{ source: { uri: customer.avatar_url } }}
                      title={customer.name}
                      subtitle={customer.subtitle}
                      onPress = {()=>this.props.seeCustomerItem(customer)}
                      bottomDivider
                    />
                    );
                 })
               }
             <Button
                     icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={styles.foodButton}
                      title='Add Customer' 
                      onPress = {this.props.showForm}/>
          </Card>
        )
    }
}




export default CustomerList