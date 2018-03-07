import React, { Component } from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

const EditText = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    return (
      <View>
          <Text style={styles.LabelStyle}>{label}</Text>
          <TextInput
              underlineColorAndroid='aliceblue'
              secureTextEntry={secureTextEntry}
              style={styles.EditTextStyle}
              onChangeText={onChangeText}
              value={value}
              placeholderTextColor='gray'
              placeholder={placeholder}/>
      </View>
    );
};

const styles = StyleSheet.create({
  EditTextStyle:{
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: height(7),
    marginLeft: 20,
    marginRight: 20,
    width: width(80),
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'stretch',
    borderColor: '#3b5998'
  },
  LabelStyle: {
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 10
  }
})

export { EditText };
