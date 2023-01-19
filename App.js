import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  DrawerLayoutAndroid,
  View,
  Button,
} from "react-native";
import Header from "./src/components/Header";
import { NavigationContainer } from "@react-navigation/native";
import IconAnt from "react-native-vector-icons/AntDesign";
import image from "./assets/green.jpg";
import AllNotes from "./src/screens/AllNotes";
import AddNote from "./src/screens/AddNote";
import Home from "./src/screens/Home";
import Completed from "./src/screens/Completed";

const ScreenType = {
  home: "HOME",
  addNote: "ADD_NOTE",
  allNotes: "ALL_NOTES",
  completed: "COMPLETED",
};

export default function App() {
  const drawer = useRef(null);
  const [screenType, setScreenType] = useState(ScreenType.home);

  const [tasks, setTasks] = useState([]);

  const navigationView = () => (
    <View style={styles.navigationContainer}>
      <View style={styles.iconContainer}>
        <IconAnt
          style={styles.icon}
          name="home"
          onPress={() => {
            setScreenType(ScreenType.home);
            drawer.current.closeDrawer();
          }}
        />
        <IconAnt
          style={styles.icon}
          name="menu-unfold"
          onPress={() => drawer.current.closeDrawer()}
        />
      </View>
      <View style={styles.navText}>
        <Text
          onPress={() => {
            setScreenType(ScreenType.addNote);
            drawer.current.closeDrawer();
          }}
          style={styles.text}
        >
          Add Task
        </Text>
        <Text
          onPress={() => {
            setScreenType(ScreenType.allNotes);
            drawer.current.closeDrawer();
          }}
          style={styles.text}
        >
          To Do's
        </Text>
        <Text
          onPress={() => {
            setScreenType(ScreenType.completed);
            drawer.current.closeDrawer();
          }}
          style={styles.text}
        >
          Completed Tasks
        </Text>
      </View>
    </View>
  );

  let component;

  switch (screenType) {
    case ScreenType.allNotes:
      component = <AllNotes tasks={tasks} setTasks={setTasks} />;
      break;
    case ScreenType.addNote:
      component = (
        <AddNote
          modifyTasks={(newTask) =>
            setTasks([
              ...tasks,
              { id: Date.now(), task: newTask, completed: false },
            ])
          }
        />
      );
      break;
    case ScreenType.completed:
      component = <Completed setTasks={setTasks} tasks={tasks} />;
      break;
    default:
      component = <Home />;
  }

  const toggleDrawer = () => {
    drawer.current.openDrawer();
  };

  return (
    <NavigationContainer>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        renderNavigationView={navigationView}
      >
        <View style={styles.container}>
          <Header toggleDrawer={toggleDrawer} />
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          >
            {component}
          </ImageBackground>
          <StatusBar style="light" />
        </View>
      </DrawerLayoutAndroid>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 1000,
  },
  navigationContainer: {
    flex: 1,
    backgroundColor: "#111614",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  icon: {
    color: "#81b4b0",
    fontSize: 35,
  },
  iconContainer: {
    width: "100%",
    height: 150,
    paddingHorizontal: "10%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    justifyContent: "space-between",
    borderBottomWidth: 8,
    borderColor: "#344846",
  },
  text: {
    color: "#81b4b0",
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "sans-serif-medium",
    paddingVertical: 25,
    borderBottomWidth: 8,
    paddingLeft: 40,
    borderColor: "#344846",
  },
  navText: {},
});
