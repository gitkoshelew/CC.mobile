import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  result: {
    marginTop: Platform.select({
      ios: 30,
      android: 0,
    }),
  },
  testResult: {
    paddingBottom: 30,
  },
});
