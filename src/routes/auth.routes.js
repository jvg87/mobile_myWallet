import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingPage from '../pages/OnboardingPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="OnboardingPage" component={OnboardingPage} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}
