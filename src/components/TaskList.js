import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Item from "./Item";

const TaskList = ({ tasks, modifyTasks, name, listCompleted }) => {
  console.log("TASKS FROM INSIDE : ", tasks);
  return (
    <FlatList
      //extraData={tasks}
      data={tasks}
      renderItem={({ item }) => (
        <Item
          item={item}
          modifyTasks={modifyTasks}
          name={name}
          listCompleted={listCompleted}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;

const styles = StyleSheet.create({});
