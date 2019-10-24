import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View,Image,TouchableHighlight} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'
import styles from '../constants/styles'

class OrderList extends Component{
    render(){
        return (
            <Card title="Customer Orders">
              {
                this.props.users.map((u, i) => {
                  return (
                    <ListItem
                       key={i}
                       leftAvatar={{ source: { uri: u.avatar_url } }}
                       title={u.name}
                       subtitle={u.subtitle}
                       onPress = {()=>this.props.seeOrderItem(u)}
                       bottomDivider
                  />
                    );
                 })
               }
             <Button
                     icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={styles.foodButton}
                      title='Add Order' 
                      onPress = {this.props.showForm}/>
          </Card>
        )
    }
}




export default OrderList