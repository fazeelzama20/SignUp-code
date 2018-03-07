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
        title: 'Image Upload',
        headerTintColor: 'white',
      
        });
        state = {_fname: '', 
                 _lname: '', 
                 _address: '', 
                 _city: '',
                 _error: ''
                };

    uploadImage = () => {
        Alert.alert(
            '',
            'Select a photo',
            [
              {text: 'Camera', onPress: () => this.selectCamera()},
              {text: 'Gallery', onPress: () => this.selectGallery()},
            ],
            { cancelable: true })
    }

    next = () => {
        this.props.navigation.navigate("Details", {_fname: _fname,
                                                    _lname: _lname,
                                                    _address: _address,
                                                    _city: _city})
    }

    selectCamera() {
        ImagePicker.openCamera({
          includeBase64: true
        }).then(image => {
          console.log(image);
        });
      }
    
      selectGallery() {
        ImagePicker.openPicker({
            multiple: true,
            includeBase64: true,
            }).then(images => {
               console.log("Bulk image",images);
          });
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
                <Text style={{color: 'white'}}> Hello {_fname} </Text>
                <TouchableOpacity  
                    onPress={this.uploadImage}  
                    style={styles.button}> 
                    <Text style={{justifyContent: 'center',
                                 color: 'white',
                                 alignItems: 'center',
                                 alignSelf: 'center'}}> Upload Picture </Text>
                </TouchableOpacity>

                <TouchableOpacity  
                    onPress={this.next}  
                    style={styles.buttonNext}> 
                    <Text style={{justifyContent: 'center',
                                color: 'white',
                                alignItems: 'center',
                                alignSelf: 'center'}}>Next</Text>
                </TouchableOpacity>
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
      }
  });
  