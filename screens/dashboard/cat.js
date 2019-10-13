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
  componentDidMount(){

  }


  /////////////////
  render(){
      return(
          <View>
             {
                 this.props.cats.map((cat)=>{
                     return (
                         <Text>{cat.url}</Text>
                     )
                 })
             }
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='FETCH CATS ' 
                onPress= {this.props.fetchCats } >
             </Button>
          </View>
      )
  }
}

const mapStateToProps = (state,ownProps)=>{
    console.log('hey cats',state.catReducer.cats)
  return{
      cats:state.catReducer.cats
  }
}


export default  connect(mapStateToProps,{
   fetchCats  
})(Cat)