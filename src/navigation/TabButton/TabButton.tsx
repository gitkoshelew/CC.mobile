import {ButtonCenter, styleWithSheet} from '../styles';
import {getIcon} from '../../utils/getIconNavigate';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {GestureResponderEvent, Text, View} from 'react-native';
import {Color} from '@theme/colors';

export type TabButtonPropsType = BottomTabBarButtonProps & {
  name: string;
  size?: number;
};

export const TabButton = (props: TabButtonPropsType) => {
  const {name, onPress, accessibilityState, size} = props;
  const focused = accessibilityState?.selected;
  const rotation = useSharedValue(0);

  const onPressHandler = (e: GestureResponderEvent) => {
    if (onPress) {
      onPress(e);
    }
    rotation.value = withSequence(
      withTiming(-10, {duration: 50}),
      withRepeat(withTiming(5, {duration: 100}), 6, true),
      withTiming(0, {duration: 50}),
    );
  };

  const activeColor = focused ? Color.BlueLight : Color.GrayDark;

  const animatedStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  return (
    <View style={styleWithSheet.ViewCenter}>
      <Animated.View style={[animatedStyle]}>
        <ButtonCenter onPress={onPressHandler}>
          {getIcon(name, activeColor, size)}
        </ButtonCenter>
      </Animated.View>
      <Text style={{color: activeColor}}>{name}</Text>
    </View>
  );
};
