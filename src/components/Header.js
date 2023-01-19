import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

const Header = ({ toggleDrawer }) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <Icon name="menu-fold" style={styles.icon} onPress={toggleDrawer} />
      </View>
      <View style={styles.outContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>To Do App</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111516",
    height: 150,
    paddingTop: 20,
    flexDirection: "row",
    borderBottomWidth: 8,
    borderColor: "#81b4b0",
  },
  outContainer: {
    justifyContent: "center",
    flex: 7,
    alignItems: "center",
  },
  wrapper: {
    borderColor: "#81b4b0",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 6,
    borderRadius: 10,
  },
  text: {
    color: "#81b4b0",
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "sans-serif-medium",
  },
  icon: {
    color: "#81b4b0",
    fontSize: 35,
  },
  menuContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
