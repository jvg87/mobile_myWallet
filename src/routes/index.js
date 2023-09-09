import React from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const signed = true;

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
