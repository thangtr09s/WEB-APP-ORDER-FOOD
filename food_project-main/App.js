import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./navigators/TabNavigator";
import DetailsScreen from "./screens/DetailScreen/DetailScreen";
import PaymentScreen from "./screens/PaymenScreen/PaymentScreen";
import SplashScreen from "react-native-splash-screen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ListProductScreen from "./screens/ListProductScreen/ListProductScreen";
import CartProvider from "./contexts/CartProvider";

const Stack = createNativeStackNavigator();

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>

          <Stack.Screen
            name="Detail"
            component={DetailsScreen}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>

          <Stack.Screen
            name="thanh-toan"
            component={PaymentScreen}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>

          <Stack.Screen
            name="san-pham"
            component={ListProductScreen}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>

          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
