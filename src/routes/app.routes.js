import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import CustomDrawer from '../components/CustomDrawer';
import Home from '../pages/Home';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fcfcfc',
        },
        drawerActiveTintColor: '#d8f3dc',
        drawerActiveBackgroundColor: '#2d6a4f',
        drawerInactiveTintColor: '#2d6a4f',
        drawerLabelStyle: {
          fontWeight: 'bold',
          fontSize: 16,
        },
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
