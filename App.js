import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AddChatScreen from "./src/screens/AddChatScreen";
import ChatScreen from "./src/screens/ChatScreen";

const Stack = createStackNavigator();

// const globalScreenOptions = ;
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#2C6BED" },
          headerTitleStyle: { color: "white" },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          options={{
            title: "Let's Sign up",
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            title: "Let's Register",
          }}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
