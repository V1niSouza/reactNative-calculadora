import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = {
  children: React.ReactNode;
};

export default function CalculatorDisplay({ 
    children 
}: Props) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>{children}</Text>
    </View>
  );
}