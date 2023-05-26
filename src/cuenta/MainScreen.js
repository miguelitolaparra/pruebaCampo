import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


import HomeScreen from '../screens/HomeScreen';
import AllNotesScreen from '../screens/AllNotesScreen';
import CreateNoteScreen from '../screens/CreateNoteScreen';
import CalendarScreen from '../screens/CalendarScreen';
import FitosanitaryScreen from '../screens/FitosanitaryScreen';
import MiCuentaScreen from '../cuenta/MiCuentaScreen';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notas"
          component={AllNotesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="list" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Nueva"
          component={CreateNoteScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="create" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Calendario"
          component={CalendarScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="calendar-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Fitosanitary"
          component={FitosanitaryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="leaf" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MiCuenta"
          component={MiCuentaScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
