import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Loader} from '@src/components/ui/Loader/index';

type ScreenLayoutPropsType = {
  isFetching: boolean;
  children: React.ReactNode;
};

export const ScreenLayout = ({isFetching, children}: ScreenLayoutPropsType) => {
  return (
    <View style={styles.container}>
      {isFetching && <Loader />}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
