import * as React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    welcome: {
        color: "red",
        marginBottom: 5,
        textAlign: "center"
    },
})

export const MyComponent = () => (
    <Text style={styles.welcome}>This is my first component!</Text>
)
