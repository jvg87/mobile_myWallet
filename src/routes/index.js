import React from 'react';

import { View } from 'react-native';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const signed = false;

  return signed ? <View /> : <AuthRoutes />;
}
