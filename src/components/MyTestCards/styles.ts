import {StyleSheet} from 'react-native';
import {Color} from '@theme/colors';
import {LIST_ITEM_HEIGHT} from '@src/components/MyTestCards/index';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  test: {
    width: '90%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: Color.White,
    borderRightColor: Color.BlueLight,
    borderRightWidth: 5,
    height: 71,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    color: Color.Black,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: Color.Black,
    fontWeight: '500',
  },
  iconContainer: {
    width: 70,
    height: LIST_ITEM_HEIGHT,
    position: 'absolute',
    right: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    marginTop: 6,
    justifyContent: 'space-between',
  },
  iconTopic: {
    marginRight: 5,
    marginTop: 3,
    marginLeft: 2,
  },
  icon: {
    marginRight: 5,
    marginTop: 2,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
  },
  content: {
    flexDirection: 'row',
  },
});
