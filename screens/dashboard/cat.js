import React, { Component } from 'react'
import {Platform, StyleSheet,Text, View, Alert} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header} from 'react-native-elements'
import {connect} from 'react-redux'
import fetchCats from '../../actions/fetchCats' //action Creators

class Cat extends Component{
  constructor(props){
       super(props)
       this.state = {
           catlist:[]
       }
  }
  /////////////////
  render(){
      return(
          <View>
            {
                this.props.cats.map((cat)=>{
                 return(
                     <Text>{'Hello funny cat!!!'}</Text>
                 )
                })
            }
          </View>
      )
  }
}

const mapStateToProps = (state,ownProps)=>{
  return{
      cats:state.cats
  }
}

export default  connect(mapStateToProps,{
   fetchCats  
})(Cat)