import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import Init from "./init";
import Login from "../pages/login";
import Home from "../pages/home";
import List from "../pages/list";
import Detail from "../pages/detail";

const MainTab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Ionicons name={"ios-home"} size={25} color={tintColor} />
        )
      }
    },
    List: {
      screen: List,
      navigationOptions: {
        tabBarLabel: "List",
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Ionicons name={"ios-list"} size={25} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#3897f1",
      inactiveTintColor: "gray"
    }
  }
);

const MainStack = createStackNavigator({
  MainTab: {
    screen: MainTab,
    navigationOptions: {
      headerShown: false
    }
  },
  Detail: {
    screen: Detail
  }
});

const RootStack = createSwitchNavigator({
  Init: {
    screen: Init
  },
  Login: {
    screen: Login
  },
  MainStack: {
    screen: MainStack
  }
});

// Now AppContainer is the main component for React to render
export default createAppContainer(RootStack);
