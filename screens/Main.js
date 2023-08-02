import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { authStateChanged } from "../redux/auth/authOperations";
import Router from "../router";

const AuthStack = createStackNavigator();

const Main = () => {
  const dispatch = useDispatch();

  const logIn = useSelector((state) => state.isLogIn);

  useEffect(() => {
    dispatch(authStateChanged());
  }, []);

  const routing = Router(logIn);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
