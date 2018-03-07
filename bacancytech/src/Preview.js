import React, { Component } from 'react';
import {
  Platform, KeyboardAvoidingView,
  StyleSheet, Text, StatusBar, Alert,
  View, ImageBackground, TouchableOpacity
} from 'react-native';
import { Container, Button } from 'native-base';
import { width, height, totalSize } from 'react-native-dimension';
import ImagePicker from 'react-native-image-crop-picker';


export default class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        headerStyle: {backgroundColor: '#3b5998'},
        title: 'Preview',
        headerTintColor: 'white',
      
        });
        state = {_fname: '', 
                 _lname: '', 
                 _address: '', 
                 _city: '',
                 _error: '',
                 _username: ''
                };




    render(){
        const {state} = this.props.navigation;
        _fname = state.params ? state.params._fname : null;
        _lname = state.params ? state.params._lname : null;
        _address = state.params ? state.params._address : null;
        _city = state.params ? state.params._city : null;
        _username = state.params ? state.params._username : null;
        return(
            <View>
                <ImageBackground 
                    style={styles.container}
                    source={require('./image/bg.jpg')}>
                    <View style={{flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignSelf: 'center'}}>
                    <Text style={styles.text}> First Name </Text>
                    <Text style={styles.text}>{_fname}</Text>
                    <Text style={styles.text}> Last Name </Text>
                    <Text style={styles.text}>{_lname}</Text>
                    <Text style={styles.text}> Address </Text>
                    <Text style={styles.text}>{_address}</Text>
                    <Text style={styles.text}> City</Text>
                    <Text style={styles.text}>{_city}</Text>
                    <Text style={styles.text}> Username </Text>
                    <Text style={styles.text}>{_username}</Text>
                    </View>
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
      text:{
          color: 'white'
      }
  });
  