import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainTab from './MainTab'
import Home from '../screens/Home'

const Stack = createStackNavigator()

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="MainTab" component={MainTab} />
  </Stack.Navigator>
)

export { StackNavigator };
