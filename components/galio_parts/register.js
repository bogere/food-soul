
import React, {Component} from 'react'
import {Dimensions,StyleSheet,Alert,KeyboardAvoidingView,} from 'react-native';
import {
    Block, Button, Input, NavBar, Text,
  } from 'galio-framework';

import theme from './theme';
import styles from './galio_style';

const { width,height } = Dimensions.get('screen');



class RegisterScreen extends Component{

    state = {
        email: '-',
        password: '-',
    }
    
    handleChange = (name, value) => {
       this.setState({ [name]: value });
    }
   
    render(){
        const { email, password } = this.state;
        const { navigation } = this.props;
        
        return(
            <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
                 <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
                    <Block flex center style={{ marginTop: theme.SIZES.BASE * 1.875, marginBottom: height * 0.1 }}>
                        <Text muted center size={theme.SIZES.FONT*0.875} style={{ paddingHorizontal: theme.SIZES.BASE * 2.3 }}>
                            CREATE ACCOUNT
                        </Text>
                    </Block>

                <Block flex={4} center space="evenly">
                    <Block flex={4}>
                        <Input
                          rounded
                          type="text"
                          placeholder="First Name"
                          autoCapitalize="none"
                          style={styles.input}
                          onChangeText={text => this.handleChange('email', text)}
                        />
                        <Input
                          rounded
                          type="text"
                          placeholder="Last Name"
                          autoCapitalize="none"
                          style={styles.input}
                          onChangeText={text => this.handleChange('email', text)}
                        />
                        <Input
                          rounded
                          type="email-address"
                          placeholder="Email"
                          autoCapitalize="none"
                          style={styles.input}
                          onChangeText={text => this.handleChange('email', text)}
                        />
                        <Input
                          rounded
                          password
                          viewPass
                          placeholder="Password"
                          style={styles.input}
                          onChangeText={text => this.handleChange('password', text)}
                         />
                         <Input
                          rounded
                          password
                          viewPass
                          placeholder="Confirm Password"
                          style={styles.input}
                          onChangeText={text => this.handleChange('password', text)}
                         />
                         
                    </Block>
                    <Block flex middle>
                        <Button
                          round  color="primary"
                          onPress={() => Alert.alert('Sign in action',`Email: ${email} Password: ${password}`)}
                        >
                           Create Account
                       </Button>
                       <Button color="transparent" shadowless onPress={() => navigation.navigate('Register')}>
                            <Text center color={theme.COLORS.PRIMARY} size={theme.SIZES.FONT}>
                              {"Already have an account?  Login"}
                            </Text>
                        </Button>
                    </Block>
                </Block>
              </KeyboardAvoidingView> 
           </Block>
        )
    }
}



export default RegisterScreen 