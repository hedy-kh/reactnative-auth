import React from 'react';
import { View } from 'react-native';
import { client } from '../Utils/KindConfig';
import TabNavigation from '../Navigations/TabNavigation'; 
import Header from '../Components/Header';

const HomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      // Perform navigation to sign-in screen or any other screen as needed
      navigation.navigate('SignIn');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <TabNavigation />
    </View>
  );
};

export default HomeScreen;
