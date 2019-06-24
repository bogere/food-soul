import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'
import t from 'tcomb-form-native'

const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    ... // more users here
   ]


class CustomerList extends Component{
    render(){
        return (
          <View>
            <Header
               leftComponent={{ icon: 'menu', color: '#fff' }}
               centerComponent={{ text: 'SOUL FOOD', style: { color: '#fff' } }}
               rightComponent={{ icon: 'home', color: '#fff' }}
             />
             <Card title="Customer List">
                {
                users.map((u, i) => {
                  return (
                     <View key={i} style={styles.user}>
                       <Image
                           style={styles.image}
                           resizeMode="cover"
                           source={{ uri: u.avatar }}
                        />
                        <Text style={styles.name}>{u.name}</Text>
                     </View>
                    );
                 })
               }
          </Card>
           </View>

             
        )
    }
}

export default  CustomerList