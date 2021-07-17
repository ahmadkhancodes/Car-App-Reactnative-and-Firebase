import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './application/screens/appNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
