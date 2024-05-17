import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { client } from '../Utils/KindConfig'

export default function Header() {
    useEffect(()=>{
    getUserDetails();
    },[])
    const getUserDetails=async()=>{
       const user= await client.getUserDetails()
       console.log(user);
    } 
  return (
    <View>
      <Text>Header</Text>
    </View>
  )
}