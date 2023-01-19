import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the To Do list app !</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "15%",
  },
  text: {
    color: "#81b4b0",
    textAlign: "center",
    fontSize: 35,
    margin: 40,
    fontWeight: "600",
    lineHeight: 45,
  },
});
