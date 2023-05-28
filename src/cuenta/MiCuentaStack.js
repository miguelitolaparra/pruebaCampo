/* import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MiCuentaScreen from './MiCuentaScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const MiCuentaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MiCuenta"
        component={MiCuentaNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MiCuentaNavigator = ({ navigation }) => {
  // Aquí obtenemos el estado de autenticación, por ejemplo, desde Redux
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  // Renderizamos condicionalmente el componente correcto en función del estado de autenticación
  return isLoggedIn ? (
    <MiCuentaScreen navigation={navigation} />
  ) : (
    <LoginButton navigation={navigation} />
  );
};

const LoginButton = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Iniciar Sesión" onPress={() => navigation.navigate('LoginScreen')} />
    </View>
  );
};

export default MiCuentaStack;


*/



import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MiCuentaScreen from './MiCuentaScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const MiCuentaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MiCuenta"
        component={MiCuentaNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MiCuentaNavigator = ({ navigation }) => {
  // Aquí obtenemos el estado de autenticación, por ejemplo, desde Redux
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  // Renderizamos condicionalmente el componente correcto en función del estado de autenticación
  return isLoggedIn ? (
    <MiCuentaScreen navigation={navigation} />
  ) : (
    <LoginButton navigation={navigation} />
  );
};

const LoginButton = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Iniciar Sesión" onPress={() => navigation.navigate('LoginScreen')} />
    </View>
  );
};

export default MiCuentaStack;
