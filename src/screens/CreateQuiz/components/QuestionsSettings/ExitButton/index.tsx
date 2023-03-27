import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '@theme/colors';
import {ScreenList} from '@src/navigation/navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppNavigate} from '@hooks/hooks';

export const ExitButton = () => {
  const resetNavigate = useAppNavigate().reset;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        resetNavigate({
          index: 0,
          routes: [{name: ScreenList.HOME}],
        });
      }}>
      <Ionicons name="ios-close-outline" color={Color.White} size={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: Color.Red,
    width: 28,
    height: 28,
    paddingLeft: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
  },
});
