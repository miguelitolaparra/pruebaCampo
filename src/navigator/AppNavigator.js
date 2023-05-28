/* import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';
import LoginScreen from '../cuenta/LoginScreen';

const AppNavigator = createSwitchNavigator(
  {

    Main: TabNavigator,
    LoginScreen: LoginScreen, 
  },
  {
    initialRouteName: 'Main',
    
  }
);

export default createAppContainer(AppNavigator);

CAMBIO  SABADO A LAS 15:38
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import LoginScreen from '../cuenta/LoginScreen';
import RegisterScreen from '../cuenta/RegisterScreen';
import MiCuentaScreen from '../cuenta/MiCuentaScreen';
import HomeScreen from '../screens/HomeScreen';
HomeScreen


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false, // Ocultar el encabezado en todas las pantallas
        }}
      >
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='MiCuentaScreen' component={MiCuentaScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;


