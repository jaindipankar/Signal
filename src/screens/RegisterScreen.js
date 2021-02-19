import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const register = () => {
    auth
      .createUserWithEmailAndPassword(mail, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
        });
      })
      .catch((error) => alert(error.message));
  };
  // works on IOS only
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back To Login",
    });
  }, [navigation]);
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={styles.text}>
        Create a Signal Account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          type="text"
          value={name}
          onChangeText={(val) => setName(val)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={mail}
          onChangeText={(val) => setMail(val)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          secureTextEntry
          onChangeText={(val) => setPassword(val)}
        />
        <Input
          placeholder="Profile Picture URL (Optional)"
          type="text"
          value={imageUrl}
          onChangeText={(val) => setImageUrl(val)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        onPress={register}
        title="Register"
        raised
        containerStyle={styles.button}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: { marginBottom: 50 },
  button: {
    width: 200,
    marginTop: 10,
  },
  inputContainer: {
    width: 300,
  },
});
