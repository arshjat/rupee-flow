import React, { useEffect } from "react";
import Total from "./Components/total";
import Income from "./Components/income";
import Expense from "./Components/expense";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MMKV } from "react-native-mmkv";

const { Screen, Navigator } = createBottomTabNavigator();
MMKV.set("amount", 0);

function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Total" component={Total} />
        <Screen name="Income" component={Income} />
        <Screen name="Expense" component={Expense} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
