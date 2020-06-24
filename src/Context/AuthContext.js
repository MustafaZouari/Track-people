/** @format */

import CreateDataContext from "./createDataContext";
import TrackerApi from "../Api/tracker";
import { AsyncStorage } from "react-native";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const Signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await TrackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
    } catch (err) {
      dispatch({ type: "add_error", payload: "Something went wrong" });
    }
  };
};

const Signin = (dispatch) => {
  return ({ email, password }) => {
    console.log("signedIn");
  };
};

const logout = (dispatch) => {
  return () => {
    console.log("signed out");
  };
};

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { Signup, Signin, logout },
  { token: null, errorMessage: "" }
);
