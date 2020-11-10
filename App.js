import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import HomeScreen from "./Screens/Home"
import {AppNavigator} from './Navigation/Homestack'

export default function App() {
  return (
    <AppNavigator/>
    
  );
}


