import React, { Component } from 'react'
import {Platform, StyleSheet,Text, View,Image, Alert} from 'react-native';
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
  componentDidMount(){

  }


  /////////////////
  render(){
      return(
          <View>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='FETCH CATS ' 
                onPress= {this.props.fetchCats } >
             </Button>
             {
                 this.props.cats.map((cat)=>{
                     return (
                         <Image
                           style = {{width:cat.width, height:cat.height }} 
                           source = {{uri:cat.url}}
                           />
                     )
                 })
             }
          </View>
      )
  }
}

const mapStateToProps = (state,ownProps)=>{
    console.log('hey cats',state)
  return{
      cats:state.catReducer.cats
  }
}


export default  connect(mapStateToProps,{
   fetchCats  
})(Cat)