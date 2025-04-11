import React from 'react';
import ScreenCalculator from '@/components/screen/Calculator';
import { StyleSheet, Text, View } from 'react-native';



export default function TabOneScreen() {
  return (
   <View style={styles.container}>
      <ScreenCalculator />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
