import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const navigation = useNavigation();

  const [user, setUser] = useState(null);
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

  const signIn = async ({ email, password }) => {
    setLoadingAuth(true);
    try {
      const response = await api.post('/session', {
        email,
        password,
      });

      const { id, name, token } = response.data;

      const data = {
        id,
        name,
        token,
        email,
      };

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser({ id, name, email });

      setLoadingAuth(false);
    } catch (error) {
      setLoadingAuth(false);
      const { data } = error.response;
      setErrorMessage(data.error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, signUp, signIn, errorMessage, setErrorMessage, loadingAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
