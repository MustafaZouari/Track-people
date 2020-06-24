/** @format */
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

const Login = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "beige",
      }}
    >
      <Input label="Email" autoCapitalize="none" />
      <Input label="Password" />
      <Button title="Sign in" />
      <View style={{ margin: 10 }}></View>
      <Button
        title="Go to Sign Up"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
};

export default Login;
