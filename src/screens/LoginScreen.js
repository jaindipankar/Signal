import React, { useState, useEffect } from "react";
import { StyleSheet,  View, KeyboardAvoidingView } from "react-native";
import { Button, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../../firebase";
import { LogBox } from "react-native";
import FormComponent from "../components/FormComponent";

const LoginScreen = ({ navigation }) => {
  LogBox.ignoreLogs(["Setting a timer"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
      return unsubscribe;
    });
  }, []);
  const signin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/4/4f/Signal_Blue_Icon.png",
        }}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        <FormComponent
          signin={signin}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </View>
      <Button title="Login" containerStyle={styles.button} onPress={signin} />
      <Button
        title="Register"
        containerStyle={styles.button}
        type="outline"
        onPress={() => navigation.navigate("Register")}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 15,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
