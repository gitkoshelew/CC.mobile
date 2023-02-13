import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
    marginRight: 80,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10,
    fontFamily: 'Montserrat-Regular',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inner: {
    width: 20,
    height: 20,
    borderRadius: 5,
    flexDirection: 'row',
  },
});
