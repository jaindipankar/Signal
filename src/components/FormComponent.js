import React from "react";
import { Input } from "react-native-elements";

const FormComponent = ({ signin, password, email, setPassword, setEmail }) => {
  return (
    <>
      <Input
        placeholder="Email"
        autoFocus
        type="email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        type="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        onSubmitEditing={signin}
      />
    </>
  );
};

export default FormComponent;
