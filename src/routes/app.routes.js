import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import Home from '../pages/Home';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator screenOptions={{ headerShown: false }}>
      <AppDrawer.Screen name="Home" component={Home} />
    </AppDrawer.Navigator>
  );
}
