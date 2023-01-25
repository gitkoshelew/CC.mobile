import {useRef, useState} from 'react';
import {Dimensions, ImageBackground, PanResponder, Platform, ScaledSize} from 'react-native';
import {StyleSheet, View, Animated} from 'react-native';
import {Color} from '@theme/colors';
import {Header} from '../Header';
import {FormSignIn} from '../FormSignIn';

const isAuth = true;
export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT}: ScaledSize =
  Dimensions.get('window');
const BOTTOM_SHEET_MAX_HEIGHT = isAuth ? WINDOW_HEIGHT * 0.3 : WINDOW_HEIGHT * 0.43;

const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.03;
const MAX_UPWARD_TRANSLATE_Y = BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 30;

export const DraggableBottomSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        if (gesture.dy > 0) {
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation('up');
          } else {
            springAnimation('down');
          }
        } else {
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation('down');
          } else {
            springAnimation('up');
          }
        }
      },
    }),
  ).current;

  const springAnimation = (direction: 'up' | 'down') => {
    lastGestureDy.current =
      direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
    lastGestureDy.current >= 0 ? setIsOpen(false) : setIsOpen(true);
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
        <ImageBackground
          source={require('../../assets/images/background-second.png')}
          resizeMode="stretch">
          <View style={styles.draggableArea} {...panResponder.panHandlers}>
            <View style={styles.dragHandle} />
          </View>
          {isAuth ? <Header isOpen={isOpen} /> : <FormSignIn isOpen={isOpen} />}
        </ImageBackground>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 50,
    flex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    ...Platform.select({
      android: {elevation: 3},
      ios: {
        shadowColor: Color.GrayLight,
        shadowopacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
  },
  draggableArea: {
    width: 50,
    height: 28,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  dragHandle: {
    width: 50,
    height: 5,
    backgroundColor: Color.White,
    borderRadius: 10,
  },
});
