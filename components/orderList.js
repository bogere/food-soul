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
                    <View key={i} style={styles.user}>
                       <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: u.avatar_url }}
                        />
                       <Text style={styles.name}>{u.name}</Text>
                       <Text style={styles.name}>{u.email}</Text>
                       <Button
                           icon={<Icon name='code' color='#ffffff' />}
                           backgroundColor='#03A9F4'
                           buttonStyle={styles.foodButton}
                           onPress = {()=>this.props.seeOrderItem(u)}/>
                     </View>
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