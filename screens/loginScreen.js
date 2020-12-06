import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, 
  StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import {  Item, Input, Label, Button, Image, } from 'native-base'
import * as firebase from 'firebase'


export default class SignupScreen extends React.Component {
    state={
        email:"",
        Password:""
    }
    static navigationOptions = {
        title: "Login"
    }
    userSignin(email,pass){

        firebase.auth().signInWithEmailAndPassword(email,pass).then(()=>{
            this.props.navigation.replace("Home")
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    render() {
  return (
    <KeyboardAvoidingView
    behavior="position"
    style={styles.container}>
      <Button block>
            <Text style= {{fontWeight:'bold', fontSize:25}}>Login</Text>
          </Button>
          
          
       
      <Item floatingLabel
      style={{borderBottomColor:"red"}}
      >
              <Label>Email-Id</Label>
              <Input
              value={this.state.email}
              onChangeText={(Text)=>this.setState({email:Text})}
              />
            </Item>  
            <Item floatingLabel
            style={{borderBottomColor:"red"}}>
              <Label>Password</Label>
              <Input
              secureTextEntry={true}
              value={this.state.Password}
              onChangeText={(Text)=>this.setState({Password:Text})}
              />
            </Item>
            <Button full rounded danger 
            style={{margin:10, justifyContent:'center'}}
            onPress={()=>this.userSignin(this.state.email, this.state.Password)}
            >
                <Text style ={{fontSize:20, color:'white'}}>Login</Text>
            </Button>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate("Signup")}
            >
              <Text style={{textAlign:"center"}}>Don't Have an account ?</Text>
            </TouchableOpacity>
    </KeyboardAvoidingView>
  );
  }   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',   
    justifyContent: 'flex-start',
  },
});