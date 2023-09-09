import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const navigation = useNavigation();
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const signUp = async ({ name, email, password }) => {
    setLoadingAuth(true);
    try {
      await api.post('/user', {
        name,
        email,
        password,
      });

      setLoadingAuth(false);
      setErrorMessage(null);
      navigation.goBack();
    } catch (error) {
      setLoadingAuth(false);
      const { data } = error.response;
      setErrorMessage(data.error);
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, errorMessage, setErrorMessage, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
