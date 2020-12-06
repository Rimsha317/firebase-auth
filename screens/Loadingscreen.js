import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, 
  StyleSheet, Text, View, ActivityIndicator} from 'react-native';
  import * as firebase from 'firebase'



export default class LoadingScreen extends React.Component {
   
    static navigationOptions = {
        header: null
    }
    componentDidMount(){
        this.unsuscribeAuth = firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate("Home")
            }else{
                this.props.navigation.navigate("login")
            }
        })
    }
    componentWillUnmount(){
        this.unsuscribeAuth()
    }
    render() {
  return (
      <View style={styles.container}>
          <ActivityIndicator size="large" color="red"/>
          
      </View>
   
  );
  }   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',   
    justifyContent: 'center',
  },
});