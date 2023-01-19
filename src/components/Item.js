import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconAnt from "react-native-vector-icons/AntDesign";

const Item = ({ item, modifyTasks, name, listCompleted }) => {
  return (
    <>
      {item.completed == listCompleted && (
        <View style={styles.item}>
          <Text style={styles.title}>{item.task}</Text>
          <IconAnt
            onPress={() => modifyTasks(item.id)}
            name={name}
            style={styles.icon}
          />
        </View>
      )}
    </>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "#111516",
    borderRadius: 8,

    marginVertical: 5,
    marginHorizontal: 16,
    borderWidth: 3,
    borderColor: "#81b4b0",
    alignItems: "center",
  },
  title: {
    flex: 7,
    fontSize: 18,
    color: "#81b4b0",
    borderRightWidth: 2,
    borderRightColor: "#81b4b0",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  icon: {
    color: "#81b4b0",
    fontSize: 22,
    textAlign: "center",
    flex: 1,
  },
});
