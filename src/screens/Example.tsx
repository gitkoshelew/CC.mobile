import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
export const Example = () => {
  return (
    <SafeAreaView style={styles.box}>
      <Text>Example screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
