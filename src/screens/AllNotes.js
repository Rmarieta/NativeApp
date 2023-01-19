import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import TaskList from "../components/TaskList";

const AllNotes = ({ tasks, setTasks }) => {
  const [currentTasks, setCurrentTasks] = React.useState(tasks);

  const modifyTasks = (id) => {
    const newTasks = [...currentTasks];
    const task = newTasks.find((_task) => _task.id === id);
    task.completed = !task.completed;
    setCurrentTasks(newTasks);
    setTasks(newTasks);
  };

  console.log("Current tasks : \n", currentTasks, "\nAND tasks :\n", tasks);

  return (
    <>
      {currentTasks.filter((task) => !task.completed).length > 0 ? (
        <>
          <Text style={styles.text}>To Do :</Text>
          <TaskList
            tasks={tasks}
            modifyTasks={modifyTasks}
            name="check"
            listCompleted={false}
          />
        </>
      ) : (
        <View style={styles.container}>
          <Text style={styles.textBlank}>
            No tasks to be completed at the moment !
          </Text>
        </View>
      )}
    </>
  );
};

export default AllNotes;

const styles = StyleSheet.create({
  text: {
    color: "#81b4b0",
    fontSize: 25,
    marginLeft: 16,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: "600",
  },
  textBlank: {
    color: "#81b4b0",
    textAlign: "center",
    fontSize: 35,
    margin: 40,
    fontWeight: "600",
    lineHeight: 45,
  },

  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "15%",
  },
});
