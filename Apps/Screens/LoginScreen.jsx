import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import { client } from './../Utils/KindConfig'
export default function LoginScreen() {
   
    const handleSignUp = async () => {
        const token = await client.register();
        if (token) {
            console.log("user singed up successfully")
        }
      };
      
      const handleSignIn = async () => {
        const token = await client.login();
        if (token) {
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