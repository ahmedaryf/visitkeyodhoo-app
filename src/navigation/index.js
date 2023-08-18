import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import DestinationScreen from '../screens/DestinationScreen';
import GuesthouseScreen from '../screens/GuesthouseScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcom' component={WelcomeScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Destination' component={DestinationScreen} />
        <Stack.Screen name='Guesthouse' component={GuesthouseScreen} />

        </Stack.Navigator>
    </NavigationContainer>
  )
}