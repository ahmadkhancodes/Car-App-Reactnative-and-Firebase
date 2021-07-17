import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AddCar from './addCar';
import ListOfCars from './listOfCars';
import CarDetails from './carDetails';


const Stack = createStackNavigator();

function manageCars() {
  return (
    <Stack.Navigator initialRouteName="List of Cars">
      <Stack.Screen name="List of Cars" component={ListOfCars} />
      <Stack.Screen name="Add Car" component={AddCar} />
      <Stack.Screen name="Car Details" component={CarDetails} />
    </Stack.Navigator>
  );
}
export default manageCars;
