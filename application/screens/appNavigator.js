import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ManageCars from './manageCars';
import ManageCarBrands from './manageCarBrands';

const Drawer = createDrawerNavigator();

function appNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Manage Cars">
      <Drawer.Screen name="Manage Cars" component={ManageCars} />
      <Drawer.Screen name="Manage Car Brands" component={ManageCarBrands} />
    </Drawer.Navigator>
  );
}
export default appNavigator;
