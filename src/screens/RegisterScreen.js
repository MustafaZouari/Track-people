/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { Context as AuthContext } from "../Context/AuthContext";

function Register({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState();
  const { state, Signup } = React.useContext(AuthContext);
  console.log(state);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Input
        label="Email"
        value={email}
        onChangeText={(NewEmail) => {
          setEmail(NewEmail);
          console.log(NewEmail);
        }}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={(NewPassword) => {
          setPassword(NewPassword);
        }}
      />
      {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
      <Button
        title="Sign Up"
        onPress={() => {
          Signup({ email, password });
        }}
      />
      <View style={{ margin: 50 }}></View>
      <Button
        title="Go to Sign in"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
}

export default Register;
