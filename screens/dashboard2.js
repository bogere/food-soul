import React, {Component} from 'react'
import {Platform, StyleSheet,Text, View} from 'react-native';
import {  List, ListItem, Icon} from 'react-native-elements'
import {createDrawerNavigator} from 'react-navigation';

//u shall have to define ur list items.
const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    }
]

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }

    toggleSideMenu(){
        this.setState({
            isOpen: !this.state.isOpen //change to true /false
        })
    }

    /////////////////////
    render(){
     //the menu component..
     const MenuComponent = (
        <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
             <List containerStyle={{marginBottom: 20}}>
                   {
                      list.map((l, i) => (
                      <ListItem
                          roundAvatar
                          onPress={() => console.log('Pressed')}
                          avatar={l.avatar_url}
                          key={i}
                          title={l.name}
                          subtitle={l.subtitle}
                    />
                ))
               }
             </List>
        </View>     
     )

     //actually displaying the items.
      return (
          
              <Icon  raised  name='heartbeat'
                      type='font-awesome'  color='#f50'
                      onPress={this.toggleSideMenu.bind(this)}
                 />
      )
    }
}

//define other classes.



export default Dashboard