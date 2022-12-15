import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Example = () => {
  return (
    <View style={styles.box}>
      <Text>Example screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
