import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function CalculatorContainer({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
    justifyContent: "flex-end",
  },
});