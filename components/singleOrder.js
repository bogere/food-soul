import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View,Image,Dimensions} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'


const SCREEN_WIDTH = Dimensions.get('window').width;

const IMAGE_SIZE = SCREEN_WIDTH - 80;

class singleOrder extends Component{
    render(){
        const {params} = this.props.navigation.state
        console.log('single item',params)
        return(
            <Card title="Order Detail">

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
               <Text style = {styles.nameHeader}>{params.item.customer}</Text>
               <Image 
                 source = {{
                   uri : params.item.food_image
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


export default singleOrder