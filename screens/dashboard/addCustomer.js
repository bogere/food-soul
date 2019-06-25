import React, {Component} from 'react'
import {Platform, StyleSheet,Text,ScrollView,TouchableHighlight,Alert, View} from 'react-native';
import { Card, ListItem, Button, Icon,Input } from 'react-native-elements'
import t from 'tcomb-form-native'


const Form = t.form.Form

//define ur domain model..
const Customer = t.struct({
   firstName: t.String,
   lastName: t.String,
   email: t.maybe(t.String),
   phone : t.Number()
})

const options = {
    fields:{
        firstName: {
            label: 'First Name',
            placeholder: 'Enter the first Name',
            error: 'First Name is empty!!'
        },
        lastName: {
            label: 'Last Name',
            placeholder: 'Enter last name',
            error: 'Last Name is empty'
        }
    }
}

class NewCustomer extends Component{
    constructor(props){
      super(props)
      this.state = {

      }
      this.submitNewCustomer = this.submitNewCustomer.bind(this)
    }


    submitNewCustomer(e){
      e.preventDefault()
      const value = this.refs.myForm.getValue();
      if (value) {
         console.log('submit customer', value)   
      }
    }

    /////////////////////
    render(){
        return(
            <View>
               <Card  title = "ADD NEW CUSTOMER">
                  <Form ref = "myForm"
                     type = {Customer}
                     options = {options}
                   />
                  <Button
                  icon={<Icon name='code' color='#ffffff' />}
                  backgroundColor='#03A9F4'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='ADD CUSTOMER ' 
                   onPress = {this.submitNewCustomer}/>
               </Card>
        </View>
        )
    }
}

export default NewCustomer