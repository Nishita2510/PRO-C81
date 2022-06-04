import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/drawerNavigator'


export default function App() {
  return (
    <NavigationContainer>
   <DrawerNavigator />
    </NavigationContainer>
  );
}
