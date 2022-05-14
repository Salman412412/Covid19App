import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './Pages/Dashboard';
import Hospitals from './Pages/Hospitals';


const Stack = createNativeStackNavigator();

export default function App() {
   return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Hospitals" component={Hospitals} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}