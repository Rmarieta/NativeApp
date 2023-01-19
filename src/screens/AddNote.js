import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import IconAnt from "react-native-vector-icons/AntDesign";

const AddNote = ({ modifyTasks }) => {
  const createButtonAlert = (msg) =>
    Alert.alert("New task added", msg, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          modifyTasks(textInp);
          onChangeTextInp("");
        },
      },
    ]);

  const [textInp, onChangeTextInp] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.addcontainer}>
        <View style={styles.inputContainer}>
          <TextInput
            multiline={true}
            style={styles.input}
            onChangeText={onChangeTextInp}
            value={textInp}
            placeholder="Add a new task..."
            placeholderTextColor="#81b4b0"
          />
        </View>

        <Pressable
          onPress={() => createButtonAlert(textInp)}
          style={styles.iconContainer}
        >
          <IconAnt name="plus" style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    flex: 9,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#111516",
    borderWidth: 4,
    borderColor: "#81b4b0",
  },
  input: {
    color: "#81b4b0",
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  addcontainer: {
    flexDirection: "row",
    minHeight: 100,
    width: "85%",
    marginTop: "15%",
  },
  text: {
    color: "white",
  },
  icon: {
    color: "#81b4b0",
    fontSize: 25,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderLeftWidth: 0,
    paddingHorizontal: 8,
    borderColor: "#81b4b0",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#111516",
  },
  button: {
    cursor: "pointer",
  },
});
