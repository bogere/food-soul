//implementing the sidemenu.. on the react native..
//dashboard part--> Add the customers n other details

import React, {Component} from 'react'
import { SideMenu, List, ListItem } from 'react-native-elements'

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
          <SideMenu isOpen= {this.state.isOpen} menu= {MenuComponent}>
             <App toggleSideMenu={this.toggleSideMenu.bind(this)} />
          </SideMenu>
      )
    }
}

export default Dashboard