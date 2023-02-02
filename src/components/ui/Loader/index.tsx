import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

export const Loader = ({}) => {
  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <LottieView
        style={styles.indicator}
        source={require('../../../assets/Loader.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  indicator: {
    width: 130,
    height: 130,
  },
});
