import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {Color} from '@theme/colors';

export const Loader = () => {
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
    backgroundColor: Color.TransparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: 100,
  },
  indicator: {
    width: 130,
    height: 130,
  },
});
