import React, { useContext } from 'react';

import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#081c15',
        }}
      >
        <ActivityIndicator size="large" color="#d8f3dc" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
