import { View, Text } from "react-native";
import React, { useState } from "react";
import { MMKV } from "react-native-mmkv";
import { useFocusEffect } from "@react-navigation/native";

export default function Total() {
  const [value, setValue] = useState();
  useFocusEffect(() => {
    setValue(MMKV.getNumber("amount"));
  });
  return (
    <View>
      <Text>Account Balance : Rs. {value}</Text>
    </View>
  );
}
