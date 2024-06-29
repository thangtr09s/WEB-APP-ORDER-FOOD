import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import { COLORS } from "../theme/theme";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen/CategoryScreen";
import CartScreen from "../screens/CartScreen/CartScreen";
import AccountScreen from "../screens/AccountScreen/AccountScreen";
import { useCartContext } from "../contexts/CartProvider";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { products } = useCartContext();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home-outline"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Danh mục"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="search-outline"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Giỏ hàng"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="cart-outline"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
          tabBarBadge: products?.length ?? 0,
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Cá nhân"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="person-outline"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 55,
  },
});

export default TabNavigator;
