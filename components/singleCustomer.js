import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View,Image,Dimensions} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'


const SCREEN_WIDTH = Dimensions.get('window').width;

const IMAGE_SIZE = SCREEN_WIDTH - 80;

class singleCustomer extends Component{
    render(){
        const {params} = this.props.navigation.state
        console.log('hey passed', params) //item
        return(
            <Card title="Customer Detail">

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
               <Text style = {styles.nameHeader}>{params.item.name}</Text>
               <Image 
                 source = {{
                   uri :'https://static.pexels.com/photos/428336/pexels-photo-428336.jpeg',
               }}
               style = {{
                   width: IMAGE_SIZE,
                   height: IMAGE_SIZE,
                   borderRadius: 10
               }} 
               />
            </View>
         </Card>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FD6B78',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  nameHeader: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
  },
  
});


export default singleCustomer