import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Home = () => {
  return (
    <View style={styles.box}>
      <Text>Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
});
