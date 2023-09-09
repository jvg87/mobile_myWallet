import PropTypes from 'prop-types';
import React, { createContext, useMemo } from 'react';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const signUp = (data) => {
    console.log(data);
  };

  const contextValue = useMemo(() => ({ signUp }), []);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
