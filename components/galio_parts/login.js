
import React, {Component} from 'react'
import {Dimensions,StyleSheet,Alert,KeyboardAvoidingView,} from 'react-native';
import {
    Block, Button, Input, NavBar, Text,
  } from 'galio-framework';

  import theme from './theme';

const { width,height } = Dimensions.get('screen');


class LoginScreen extends Component{

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
                            LOGIN
                        </Text>
                    </Block>

                <Block flex={2} center space="evenly">
                    <Block flex={2}>
                        <Input
                          rounded
                          type="email-address"
                          placeholder="Email"
                          autoCapitalize="none"
                          style={{ width: width  }}
                          onChangeText={text => this.handleChange('email', text)}
                        />
                        <Input
                          rounded
                          password
                          viewPass
                          placeholder="Password"
                          style={{ width: width}}
                          onChangeText={text => this.handleChange('password', text)}
                         />
                        <Text
                            color={theme.COLORS.ERROR}
                            size={theme.SIZES.FONT}
                            onPress={() => Alert.alert('Not implemented')}
                            style={{ alignSelf: 'flex-end', lineHeight: theme.SIZES.FONT }}
                        >
                           Forgot your password?
                        </Text>
                    </Block>
                    <Block flex middle>
                        <Button
                          round  color="error"
                          onPress={() => Alert.alert('Sign in action',`Email: ${email} Password: ${password}`)}
                        >
                           Sign in
                       </Button>
                       <Button color="transparent" shadowless onPress={() => navigation.navigate('Register')}>
                            <Text center color={theme.COLORS.ERROR} size={theme.SIZES.FONT}>
                              {"Don't have an account? Sign Up"}
                            </Text>
                        </Button>
                    </Block>
                </Block>
              </KeyboardAvoidingView> 
           </Block>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: theme.SIZES.BASE * 0.3,
        paddingHorizontal: theme.SIZES.BASE,
        backgroundColor: theme.COLORS.WHITE,
      },
      social: {
        width: theme.SIZES.BASE * 3.5,
        height: theme.SIZES.BASE * 3.5,
        borderRadius: theme.SIZES.BASE * 1.75,
        justifyContent: 'center',
      },
  });

export default LoginScreen 