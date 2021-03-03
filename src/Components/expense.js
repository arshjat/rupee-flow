import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { AsyncStorage } from "react-native";
import { MMKV } from "react-native-mmkv";

export default function Expense() {
  const [value, onChangeText] = React.useState("");
  return (
    <View>
      <Text>Expense</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: "80%"
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Button
        title="Submit"
        onPress={() =>
          MMKV.set("amount", MMKV.getNumber("amount") - Number(value))
        }
      />
    </View>
  );
}
