import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View,Image,TouchableHighlight} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'

class OrderList extends Component{
    render(){
        return (
            <Card title="Order List">
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
                       <TouchableHighlight style={styles.button} onPress={()=>this.props.seeOrderItem(u)} underlayColor='#99d9f4'>
                          <Text style={styles.buttonText}>View</Text>
                       </TouchableHighlight>
                     </View>
                    );
                 })
               }
             <Button
                     icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Add Order' 
                      onPress = {this.props.showForm}/>
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
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  email: {
    fontSize: 12,
    marginLeft: 5
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});


export default OrderList