/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Home from './Home';
import ImageUpload from './ImageUpload';
import Details from './Details';
import Preview from './Preview';

const App = StackNavigator({
      Home: {screen: Home},
      ImageUpload: {screen: ImageUpload},
      Details: {screen: Details},
      Preview: {screen: Preview}
});


export default App;
