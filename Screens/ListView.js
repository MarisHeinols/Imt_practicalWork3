import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View ,FlatList} from "react-native";


export default function listView () {
    const [people, setPeople] = useState([
      { name: "Harry", key: "1" },
      { name: "Albert", key: "2" },
      { name: "Ronald", key: "3" },
      { name: "Sara", key: "4" },
      { name: "Matrix", key: "5" },
      { name: "Hether", key: "6" },
      { name: "Homer", key: "7" },
    ]);
  return (
    <View style={styles.container}>
      <FlatList
          data={people}
          renderItem={({item})=>(
            <Text style={styles.item}>{item.name}</Text>
            
          )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  item: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 15,
    paddingLeft: "30%",
    backgroundColor: "#B9E9F4",
    fontSize: 20,
  },
});
