
import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {loadCustomers} from './services/customers'



class CustomerList extends Component{
    constructor(props){
      super(props)
      this.state = {
        customers: []
      }
    }
    
    componentDidMount(){
        loadCustomers()
        .then(result=>{
            this.setState({customers: result.data})
        })
        .catch(err=>{
            console.log('something broke man...')
        })
    }
    ////////////
    render(){

         const customerList = this.state.customers
        return(
            <Card title="CLIENT LIST ">
             {
              customerList.map((cust, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: cust.avatar }}
                    />
                    <Text style={styles.name}>{cust.first_name}</Text>
                  </View>
                 );
               })
              }
          </Card>
        )
    }
}


//////
//catering for their styles.
const styles = StyleSheet.create({
    image :{ //customer avatar images
        verticalAlign: middle,
        width:50,
        height: 50,
        borderRadius: 50
    },

    name: {
      fontFamily:regular
    }
})