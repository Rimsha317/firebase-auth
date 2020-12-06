import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Style } from 'react-native';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import { createSwitchNavigator} from 'react-navigation'
import SignupScreen from './screens/SignupScreen'
import loginScreen from './screens/loginScreen'
import LoadingScreen from './screens/Loadingscreen';
import HomeScreen from './screens/HomeScreen'

import * as firebase from 'firebase';
import {firebaseConfig} from './config'
firebase.initializeApp(firebaseConfig);

const mystack = createStackNavigator({

  login: loginScreen,
  Home: HomeScreen,
  loading: LoadingScreen,
  Signup: SignupScreen,
  
},{
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
})
const myswitch = createSwitchNavigator({
  
  Home: HomeScreen,
  loading: LoadingScreen,

})
export default createAppContainer(mystack)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
