import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const navigation = useNavigation();

  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showValue, setShowValue] = useState(false);
  const [showModalTransaction, setShowModalTransaction] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@myWallet');

      if (storageUser) {
        const response = await api
          .get('/me', {
            headers: {
              Authorization: `Bearer ${storageUser}`,
            },
          })
          .catch(() => {
            setUser(null);
          });

        api.defaults.headers.Authorization = `Bearer ${storageUser}`;
        setUser(response.data);
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

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

      const { id, name, token, balance } = response.data;

      // const data = {
      //   id,
      //   name,
      //   token,
      //   email,
      // };

      await AsyncStorage.setItem('@myWallet', token);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser({ id, name, email, balance });

      setLoadingAuth(false);
    } catch (error) {
      setLoadingAuth(false);
      const { data } = error.response;
      setErrorMessage(data.error);
    }
  };

  const signOut = async () => {
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };

  const updateBalance = async ({ balance }) => {
    try {
      await api.put('/me', {
        balance,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signUp,
        signIn,
        signOut,
        updateBalance,
        errorMessage,
        setErrorMessage,
        loadingAuth,
        loading,
        showValue,
        setShowValue,
        showModalTransaction,
        setShowModalTransaction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
