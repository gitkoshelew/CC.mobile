import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

type CircleButtonPropsType = {
  children: React.ReactNode;
  onPress: () => void;
  disabled: boolean;
};

export const CircleButton = ({children, onPress, disabled}: CircleButtonPropsType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={disabled && styles.disabled}
      disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.4,
  },
});
