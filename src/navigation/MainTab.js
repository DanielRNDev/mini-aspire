import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Loan, Repay } from '../screens';

const Tab = createBottomTabNavigator();

const MainTab = () => (
  <Tab.Navigator
    initialRouteName="All"
    tabBarOptions={{
      activeBackgroundColor: '#e4901a',
      activeTintColor: '#ffffff',
      showLabel: false,
    }}>
    <Tab.Screen
      name="Loan"
      component={Loan}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="hand-heart"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Repay"
      component={Repay}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="credit-card-check-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTab;
