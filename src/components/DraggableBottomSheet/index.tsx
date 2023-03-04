import {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  PanResponder,
  ScaledSize,
  View,
} from 'react-native';
import {Content} from '@src/components/DraggableBottomSheet/Content/Content';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {getStyles} from '@src/components/DraggableBottomSheet/styles';
import {setIsScrollEnabled} from '@src/bll/appReducer';

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT}: ScaledSize =
  Dimensions.get('window');

const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.03;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 30;

export const DraggableBottomSheet = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogForm, setIsLogForm] = useState(false);

  const isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn);

  const BOTTOM_SHEET_MAX_HEIGHT = isLoggedIn
    ? WINDOW_HEIGHT * 0.26
    : isLogForm
    ? WINDOW_HEIGHT * 0.5
    : WINDOW_HEIGHT * 0.68;
  const MAX_UPWARD_TRANSLATE_Y = BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;

  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        dispatch(setIsScrollEnabled(false));
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderEnd: () => {
        dispatch(setIsScrollEnabled(true));
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

  useEffect(() => {
    !isLoggedIn && setIsLogForm(true);
  }, [isLoggedIn]);

  return (
    <View style={getStyles().container}>
      <Animated.View
        style={[
          getStyles(BOTTOM_SHEET_MAX_HEIGHT, MAX_UPWARD_TRANSLATE_Y).bottomSheet,
          bottomSheetAnimation,
        ]}>
        <ImageBackground
          style={getStyles().imageBackground}
          source={require('../../assets/images/background-second.png')}
          resizeMode="stretch">
          <View style={getStyles().draggableArea} {...panResponder.panHandlers}>
            <View style={getStyles().dragHandle} />
          </View>
          <Content isOpen={isOpen} isLogForm={isLogForm} setIsLogForm={setIsLogForm} />
        </ImageBackground>
      </Animated.View>
    </View>
  );
};
