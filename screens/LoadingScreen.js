import React, {Component} from 'react'
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import { ActivityIndicator } from 'react-native-paper';

export default class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
}

    checkIfLoggedIn =()=>{
        firebase.auth().onAuthStateChange(user =>{
            if(user){
                this.props.navigation.navigator("DashboardScreen")
            }
                else {
                    this.props.navigation.navigator("loginScreen")
                }
            
        })
    }

    render(){
        return(
        <View 
        style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <ActivityIndicator size="large"/>
        </View>
        )
    }
}
