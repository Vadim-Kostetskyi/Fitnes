import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import TrainingScreen from "./screens/TrainingScreen";
import NumberOfApproachesScreen from "./screens/NumberOfApproaches";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import BicepsBackScreen from "./screens/BicepsBackScreen";
import TricepsChestScreen from "./screens/TricepsChestScreen";

const AuthStack = createStackNavigator();

const Router = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Register" component={RegisterScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
      </AuthStack.Navigator>
    );
  }
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Home" component={HomeScreen} />
      <AuthStack.Screen name="Training" component={TrainingScreen} />
      <AuthStack.Screen name="BicepsBack" component={BicepsBackScreen} />
      <AuthStack.Screen name="TricepsChest" component={TricepsChestScreen} />

      <AuthStack.Screen
        name="NumberOfApproaches"
        component={NumberOfApproachesScreen}
      />
    </AuthStack.Navigator>
  );
};

export default Router;
