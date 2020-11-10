import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import ListView from "../Screens/ListView";
import { color } from "react-native-reanimated";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator >
    <Screen name="Home" component={Home} />
    <Screen name="ListView" component={ListView} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
