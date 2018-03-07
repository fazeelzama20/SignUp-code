import React, { Component } from 'react';
import {
  Platform, KeyboardAvoidingView,
  StyleSheet, Text, StatusBar,
  View, ImageBackground, TouchableOpacity
} from 'react-native';
import { Container, Button } from 'native-base';
import { width, height, totalSize } from 'react-native-dimension';
import {EditText} from './components/EditText';
import ImageUpload from './ImageUpload';

export default class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        headerStyle: {backgroundColor: '#3b5998'},
        title: 'Home',
        headerTintColor: 'white',
      
        });
        state = {_fname: '', 
                 _lname: '', 
                 _address: '', 
                 _city: '',
                 _error: ''
                };


    isValid() {
        const { _fname, _address, _city } = this.state;
        let valid = false;
    
        if (_fname.length > 0 && _fname.length > 0 && _city.length > 0) {
            valid = true;
        }
    
        if (_fname.length === 0) {
            this.setState({ error: 'You must enter an first name' });
        } else if (_address.length === 0) {
            this.setState({ error: 'You must enter a address' });
        } else if (_city.length === 0) {
            this.setState({ error: 'You must enter a city' });
        }
    
        return valid;
        }

        signUp = () => {

            const {_fname,_lname, _address, _city} = this.state;
                

                // console.log("details",FirstName, Address, City);
                if(this.isValid()){
                    this.props.navigation.navigate("ImageUpload", {_fname: _fname,
                                                                    _lname: _lname,
                                                                    _address: _address,
                                                                    _city: _city})
                }
        }
    
    render() {
      return (
        <ImageBackground 
          style={styles.container}
          source={require('./image/bg.jpg')}>
          <StatusBar
                      backgroundColor='#293e6a' />

                <KeyboardAvoidingView>
                    <EditText
                    label="First Name"
                      blurOnSubmit="true"
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={_fname => this.setState({_fname})}
                      value={this.state._fname}
                      placeholder="Mandatory"
                      keyboardType="email-address"
                      spellCheck={false}/>
              
                    <EditText
                    label="Last Name"
                      blurOnSubmit="true"                
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={_lname => this.setState({_lname})}
                      value={this.state._lname}
                      placeholder="Optional"
                      spellCheck={false}/>

                    <EditText
                    label="Address"
                      blurOnSubmit="true"                
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={_address => this.setState({_address})}
                      value={this.state._address}
                      placeholder="Mandatory"
                      spellCheck={false}/>

                    <EditText
                    label="City"
                      blurOnSubmit="true"                
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={_city => this.setState({_city})}
                      value={this.state._city}
                      placeholder="Mandatory"
                      spellCheck={false}/>
                </KeyboardAvoidingView>

                <TouchableOpacity 
                    onPress={this.signUp}    
                    style={styles.button}> 
                    <Text style={{justifyContent: 'center',
                                 color: 'white',
                                 alignItems: 'center',
                                 alignSelf: 'center'}}> Next </Text>
                </TouchableOpacity>

                <Text
                    style={styles.ErrorTextStyle}>
                    {this.state.error}
              </Text>

        </ImageBackground>
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
      ErrorTextStyle:{
        marginTop: 15,
        fontSize: totalSize(2),
        alignSelf: 'center',
        color: 'red'
      },
  });
  