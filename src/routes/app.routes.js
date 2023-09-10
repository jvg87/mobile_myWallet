import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fcfcfc',
        },
        drawerActiveTintColor: '#d8f3dc',
        drawerActiveBackgroundColor: '#2d6a4f',
      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }}
      />
    </AppDrawer.Navigator>
  );
}
