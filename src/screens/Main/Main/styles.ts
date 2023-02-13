import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  aboutUser: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 80,
    paddingHorizontal: 20,
  },
  containerProfile: {
    position: 'absolute',
    top: -180,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    borderBottomLeftRadius: 130,
    borderBottomRightRadius: 130,
    width: 500,
    height: 500,
  },
  profile: {
    marginTop: 50,
    marginBottom: 60,
  },
  containerBalls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  content: {
    flex: 1,
    paddingLeft: 20,
    marginBottom: 50,
  },
});
