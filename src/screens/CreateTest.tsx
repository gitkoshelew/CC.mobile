import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

export const CreateTest = () => {
  return (
    <SafeAreaView style={styles.box}>
      <Text>Create test</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
