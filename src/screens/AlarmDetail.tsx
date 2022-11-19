import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import React from "react";
import { Platform, StyleSheet, Text, View, Switch } from "react-native";

export default function AlarmDetail() {
  const id = "2";

  const handleDelete = (id: string) => {
    console.log("delete");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      {id && <Button onPress={() => handleDelete(id)}>Delete Alarm</Button>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
