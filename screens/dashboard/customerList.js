import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View,Image} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'

class CustomerList extends Component{
    render(){
        return (
            <Card title="Customer List">
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
                     </View>
                    );
                 })
               }
          </Card>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  /*list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: colors.greyOutline,
    backgroundColor: '#fff',
  },*/
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
  }
});


export default CustomerList