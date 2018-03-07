import React, { Component } from 'react';
import {ToastAndroid,
  Platform, KeyboardAvoidingView,
  StyleSheet, Text, StatusBar, Alert,
  View, ImageBackground, TouchableOpacity
} from 'react-native';
import { Container, Button } from 'native-base';
import { width, height, totalSize } from 'react-native-dimension';
import ImagePicker from 'react-native-image-crop-picker';
import {EditText} from './components/EditText';


export default class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        headerStyle: {backgroundColor: '#3b5998'},
        title: 'Details',
        headerTintColor: 'white',
      
        });
        state = {_username: '', 
                 _password: '', 
                 _confirmPassword: '',
                 _error: '',
                 _fname: '',
                 _lname: '',
                 _address: '',
                 _city: ''
                };

        isValid() {
            const { _username, _password, _confirmPassword } = this.state;
            let valid = false;
        
            if (_username.length > 0 && _password.length > 0 && _confirmPassword.length > 0) {
                valid = true;
            }
        
            if (_username.length === 0) {
                this.setState({ error: 'You must enter an username' });
            } else if (_password.length === 0) {
                this.setState({ error: 'You must enter a password' });
            } else if (_confirmPassword.length === 0) {
                this.setState({ error: 'You must enter a confirm password' });
            }
        
            return valid;
            }

   
    next = () => {
        const {_username, _password, _confirmPassword} = this.state;
                if(this.isValid()){
                    if(_username === 'fazeel' && _password === 'fazeel@123' && _confirmPassword === 'fazeel@123'){
                        this.props.navigation.navigate("Preview", {_fname: _fname,
                            _lname: _lname,
                            _address: _address,
                            _city: _city,
                            _username: _username})
                            ToastAndroid.show("Sign up successfull", ToastAndroid.LONG)
                    } else {
                        alert("Invalid credentials")
                    }
                }
               
    }

    render(){
        const {state} = this.props.navigation;
        _fname = state.params ? state.params._fname : null;
        _lname = state.params ? state.params._lname : null;
        _address = state.params ? state.params._address : null;
        _city = state.params ? state.params._city : null;
        return(
            <View>
                <ImageBackground 
                    style={styles.container}
                    source={require('./image/bg.jpg')}>
                 <KeyboardAvoidingView>
                    <EditText
                    label="Username"
                      blurOnSubmit="true"
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={_username => this.setState({_username})}
                      value={this.state._username}
                      placeholder="fazeel"
                      keyboardType="email-address"
                      spellCheck={false}/>
              
                    <EditText
                    label="Password"
                      blurOnSubmit="true"                
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={_password => this.setState({_password})}
                      value={this.state._password}
                      placeholder="fazeel@123"
                      secureTextEntry={true}
                      spellCheck={false}/>

                    <EditText
                    label="Confirm Password"
                      blurOnSubmit="true"                
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={_confirmPassword => this.setState({_confirmPassword})}
                      value={this.state._confirmPassword}
                      placeholder="fazeel@123"
                      secureTextEntry={true}
                      spellCheck={false}/>
                </KeyboardAvoidingView>
        
                <TouchableOpacity  
                    onPress={this.next}  
                    style={styles.buttonNext}> 
                    <Text style={{justifyContent: 'center',
                                color: 'white',
                                alignItems: 'center',
                                alignSelf: 'center'}}>Next</Text>
                </TouchableOpacity>
                <Text
                    style={styles.ErrorTextStyle}>
                    {this.state.error}
              </Text>
                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width(100),
        height: height(100),
        alignItems: 'center',
        backgroundColor: 'white',
      },
    button: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center',
        marginTop: 20,
        height: height(7),
        width: width(50),
        backgroundColor: '#3b5998',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
      },
      buttonNext: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center',
        marginTop: 20,
        height: height(7),
        width: width(50),
        backgroundColor: '#3b5998',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
      },
      ErrorTextStyle:{
        marginTop: 15,
        fontSize: totalSize(2),
        alignSelf: 'center',
        color: 'red'
      }
  });
  