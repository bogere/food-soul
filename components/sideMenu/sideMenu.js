//custom component to be rendered in place of the default 
//DrawerItems provided by the library. using react navigation for sidemenu

import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';

class SideMenu extends Component{
    
    navigateToScreen = (route)=>{
       const navigateAction =  NavigationActions.navigate({
           routeName: route
       })
       this.props.navigation.dispatch(navigateAction)
    }

    /////////////////////////
    render(){
        //return null
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Text style={styles.sectionHeadingStyle}>
                           Section 1
                        </Text>
                        <View style={styles.navSectionStyle}>
                          <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page1')}>
                             Page1
                           </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                   <Text>This is my fixed footer</Text>
                </View>
            </View>
        )
    }
}

//checking the proptypes.
SideMenu.PropTypes = {
    navigation: PropTypes.object
}

export default SideMenu