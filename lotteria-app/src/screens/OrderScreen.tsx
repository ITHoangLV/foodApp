import React from "react";
import { Alert, View } from "react-native";
import { Button } from "../components/common/Button";
export default function OrderScreen() {
  const handlePress = () => {
    Alert.alert("Button Pressed", "You have pressed the button!");
  };
  return (
    <View>
      <Button isLoading={false} variant={"secondary"} label="djtme thanfg hoang" onPress={handlePress} />
    </View>
  );
}
