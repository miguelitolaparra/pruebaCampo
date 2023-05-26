/* 
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import store from './redux/store';

import LoginScreen from './cuenta/LoginSreen';
import MiCuentaScreen from './cuenta/MiCuentaScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  // Función para verificar el estado de autenticación
  const checkAuthentication = async () => {
    try {
      // Verificar si hay datos de sesión almacenados en AsyncStorage
      const user = await AsyncStorage.getItem('user');
      const authenticated = !!user;
      setAuthenticated(authenticated);
    } catch (error) {
      // Manejar el error de AsyncStorage
      console.error('Error al obtener los datos de sesión:', error);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {isAuthenticated ? (
            <>

            <Stack.Screen name="MiCuentaScreen" component={MiCuentaScreen} />

            </>
            
          ) : (
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



VIERNES PRIMER CAMBIO
 */


import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import store from './redux/store';

import LoginScreen from './cuenta/LoginSreen';
import MiCuentaScreen from './cuenta/MiCuentaScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  // Función para verificar el estado de autenticación
  const checkAuthentication = async () => {
    try {
      // Verificar si hay datos de sesión almacenados en AsyncStorage
      const user = await AsyncStorage.getItem('user');
      const authenticated = !!user;
      setAuthenticated(authenticated);
    } catch (error) {
      // Manejar el error de AsyncStorage
      console.error('Error al obtener los datos de sesión:', error);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {isAuthenticated ? (
            <Stack.Screen name="MiCuentaScreen" component={MiCuentaScreen} /> // Asegúrate de que el nombre sea correcto
          ) : (
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


