import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from "./../Screens/HomeScreen"
import MyCourseScreen from '../Screens/MyCourseScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../Utils/Colors'

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: null 
    }}>
      <Tab.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          tabBarIcon:({color,size,focused})=>( 
            <Ionicons name="home" size={24} color={focused ? Colors.PRIMARY : 'gray'} />
          ),
          tabBarLabel:({color,focused})=>( 
            <Text style={{color: focused ? Colors.PRIMARY : 'gray'}}>Home</Text>
          )
        }}
      />
      <Tab.Screen 
        name='MyCourse' 
        component={MyCourseScreen} 
        options={{
          tabBarIcon:({color,size,focused})=>( 
            <Ionicons name="book" size={24} color={focused ? Colors.PRIMARY : 'gray'} />
          ),
          tabBarLabel:({color,focused})=>( 
            <Text style={{color: focused ? Colors.PRIMARY : 'gray'}}>My Courses</Text>
          )
        }}
      />
      <Tab.Screen 
        name='Profile' 
        component={ProfileScreen} 
        options={{
          tabBarIcon:({color,size,focused})=>( 
            <Ionicons name="person-circle" size={24} color={focused ? Colors.PRIMARY : 'gray'} />
          ),
          tabBarLabel:({color,focused})=>( 
            <Text style={{color: focused ? Colors.PRIMARY : 'gray'}}>Profile</Text>
          )
        }}
      />
    </Tab.Navigator>
  )
}
