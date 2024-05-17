/*
import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Colors from '../Utils/Colors'
import { client } from './../Utils/KindConfig'
import { AuthContext } from '../../App'
export default function LoginScreen() {
  
   //const {auth,setAuth} = useContext(AuthContext);
    const handleSignUp = async () => {
        const token = await client.register();
        if (token) {
          //setAuth(true)
            console.log("user singed up successfully")
        }
      };
      
      const handleSignIn = async () => {
        const token = await client.login();
        if (token) {
          //setAuth(true)
          console.log("user signed in successfully")
        }
      };
  return (
    <View>
      <Image source={require('../../assets/images/rocket.jpg')}
        style={{width:'100%',height:400,objectFit:'cover'}}/>
        <View style={{padding:20}}>
            <Text style={{fontSize:44,fontWeight:'bold'}}>
                Welcome To <Text style={{color:Colors.PRIMARY}}>EduApp</Text> 
            </Text>
            <Text style={{fontSize:20,marginTop:7,color:Colors.GRAY}}>Learn New Skills From real life experience</Text>

            <TouchableOpacity  onPress={handleSignIn}
                     style={styles.button}>
                <Text style={{textAlign:'center',color:Colors.White,fontSize:18}}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp}>
            <Text style={{marginTop:10,color:Colors.PRIMARY,textAlign:'center',fontSize:16}}>Create New Account</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}const styles = StyleSheet.create({
    button:{
        padding:16,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop:60
    }
})
*/
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogScreen from './LogScreen';
import SignupScreen from './SignupScreen'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LogScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
