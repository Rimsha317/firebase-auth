import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, 
  StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {  Item, Input, Label, Button, Image, } from 'native-base'
import * as firebase from 'firebase'


export default class SignupScreen extends React.Component {
    state={
        email:"",
        Password:""
    }
    static navigationOptions = {
        title: "Sign Up"
    }
    userSignup(email,pass){
      
      firebase.auth().createUserWithEmailAndPassword(email,pass).then(()=>{
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
            <Text style= {{fontWeight:'bold', fontSize:25}}>Sign Up</Text>
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
            onPress={()=>this.userSignup(this.state.email, this.state.Password)}
            >
                <Text style ={{fontSize:20, color:'white'}}>Sign Up</Text>
            </Button>
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate("login")}
            >
              <Text style={{textAlign:"center"}}>Already Have an account ?</Text>
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