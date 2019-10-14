import React, { Component } from 'react'
import {Platform, StyleSheet,Text, View,Image, Alert, ScrollView} from 'react-native';
import { Card, ListItem, Button, Icon,Input, Header, Divider} from 'react-native-elements'
import {connect} from 'react-redux'
import {fetchCats,adoptCat,removeCat,updateCatDetail} from '../../actions/fetchCats' //action Creators

class Cat extends Component{
  constructor(props){
       super(props)
       this.state = {
           catlist:[]
       }
       //this.deleteCat = this.deleteCat.bind(this,item)
  }
  componentDidMount(){

  }

  //Adopting a new cat.
  adoptNewCat = ()=>{
      let newCat = {
        breeds: [],
        id: "24i", url: "https://cdn2.thecatapi.com/images/e9p.jpg",
        width: 200, height: 300
      }
      //call the redux action..
     this.props.adoptCat(newCat)
  }
  //Chasing away the cat.
  deleteCat = (cat)=>{
      //console.log('deleted cat', cat)
      this.props.removeCat(cat) //this aint being activated.. work on that pliz.
  }
  //Updating the cat details.
  updateCat = (catItem)=>{
       this.props.updateCatDetail(catItem)
  } 


  /////////////////
  render(){
      return(
          <ScrollView>
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
                       <View>
                         <Image
                           style = {{width:cat.width, height:cat.height }} 
                           source = {{uri:cat.url}}
                           />
                          <Button
                              buttonStyle={{borderRadius: 0, marginLeft:10, marginRight: 10, marginBottom: 0}}
                              title='CHASE IT ' 
                              onPress = {()=>this.deleteCat(cat)}>
                           </Button>
                           <Button
                              buttonStyle={{borderRadius: 0, marginLeft:10, marginRight: 10, marginBottom: 0}}
                              title='EDIT IT ' 
                              onPress = {()=>this.updateCat(cat)}>
                           </Button>
                        </View>
                     )
                 })
             }
             <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft:10, marginRight: 10, marginBottom: 0}}
                title='MORE CATS ' 
                onPress= {this.adoptNewCat} >
             </Button>
          </ScrollView>
      )
  }
}

const mapStateToProps = (state,ownProps)=>{

  return{
      cats:state.catReducer.cats
  }
}


export default  connect(mapStateToProps,{
   fetchCats, adoptCat,removeCat,updateCatDetail  
})(Cat)