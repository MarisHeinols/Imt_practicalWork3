import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";


export default function Home ({navigation}){
    const pressHandler =()=>{
        navigation.navigate("ListView");
    }
    const Counter =()=>{
        const [num,setNum]=useState(0)
        return (
          <View style={styles.setStateContainer}>
            <View style={styles.button}>
              <Button title="Increase" onPress={() => setNum(num + 1)} />
            </View>
            <View style={styles.button}>
              <Button title="Decrese" onPress={() => setNum(num - 1)} />
              <Text style={styles.counter}>Curent count:{num}</Text>
            </View>
          </View>
        );
    }

  return (
    <View style={styles.container}>
          <Button title="Go to list" onPress={pressHandler} color="green"/>
          <Counter></Counter>
      </View>
  );
};
const styles =StyleSheet.create({
    container:{
        padding:24
    },
    setStateContainer:{
        paddingTop:20,

    },
    counter:{
        paddingTop:30,
        fontSize:20,
        color:'grey',
        fontWeight:"bold",
    },
    button:{
        paddingTop:10,
    }

 
})
