import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';

type RoundButtonWrapperPropsType = {
  width?: number;
  height?: number;
  onPress: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

export const RoundButtonWrapper = ({
  width,
  height,
  onPress,
  children,
  disabled,
}: RoundButtonWrapperPropsType) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      disabled={disabled}
      style={styles({disabled, width, height}).container}>
      {children}
    </TouchableOpacity>
  );
};

type StylesPropsType = {
  disabled?: boolean;
  width?: number;
  height?: number;
};

const styles = StyleSheet.create(({disabled, height, width}: StylesPropsType) => ({
  container: {
    opacity: disabled ? 0.4 : 1,
    width,
    height,
  } as ViewStyle,
}));
