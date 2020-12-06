import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, 
  StyleSheet, Text, View, ActivityIndicator, Alert} from 'react-native';
import { Button } from 'native-base'
import * as firebase from 'firebase'

export default class Loading extends React.Component {
    state={
        email:""
    }
   
    static navigationOptions = {
        title: 'Home'
    }
    componentDidMount(){
        this.unsuscribeAuth = firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.setState({
                    email:user.email
                })
            }else{
                this.props.navigation.replace("login");
            }
        })
    }
    userSignout(){
        firebase.auth().signOut()
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    componentWillUnmount(){
        this.unsuscribeAuth()
    }
    render() {
  return (
      <View style={styles.container}>
          <Text style={{textAlign:"center"}}>You are logged in as {this.state.email}</Text>
          <Button full rounded danger 
            style={{margin:10, justifyContent:'center'}}
            onPress={()=>this.userSignout()}
            >
                <Text style ={{fontSize:20, color:'white'}}>Logout</Text>
            </Button>
          
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