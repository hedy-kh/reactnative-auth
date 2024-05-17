import { View, Text, Button } from 'react-native'
import { client } from '../Utils/KindConfig';
import React from 'react'

export default function HomeScreen() {
  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
    }
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='logout' onPress={handleLogout}/>
    </View>
  )
}