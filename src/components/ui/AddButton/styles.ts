import {StyleSheet} from 'react-native';
import {Color} from 'theme/colors';

export const styles = StyleSheet.create({
  box: {
    marginRight: 10,
    marginBottom: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: Color.GrayMedium,
    borderRadius: 20,
    paddingHorizontal: 3,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.4,
  },
  text: {
    fontSize: 40,
    color: Color.White,
    marginTop: -11,
  },
});
