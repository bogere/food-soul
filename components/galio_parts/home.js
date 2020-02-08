
import React, {Component} from 'react'
import {View, Dimensions,StyleSheet} from 'react-native';
import {
    Block, Button, Input, NavBar, Text,
  } from 'galio-framework';

  import theme from './theme';

const { width,height } = Dimensions.get('screen');


class StarterScreen extends Component{
   
    render(){
        return(
            <Block flex center style={styles.home}>
                   <Text>Hello Galio screen...</Text>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    home: {
      width: width,    
    }
  });

export default StarterScreen 