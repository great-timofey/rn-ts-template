import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { MyComponent, Instructions, Welcome } from "$components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  }
});

export const App = () => {
  const instructions = Platform.select({
    android:
      "Double tap R on your keyboard to reload,\n" +
      "Shake or press menu button for dev menu",
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu"
  });

  return (
    <View style={styles.container}>
      <Instructions instructions={instructions} />
      <Welcome name="Human" enthusiasmLevel={1} />
      <MyComponent />
    </View>
  );
};
