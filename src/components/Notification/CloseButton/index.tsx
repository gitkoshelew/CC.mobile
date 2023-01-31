import {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '@theme/colors';
import Svg, {Circle} from 'react-native-svg';
import Animated, {useAnimatedProps, useSharedValue, withTiming} from 'react-native-reanimated';

type CloseButtonPropsType = {
  setIsOpen: (id: number) => void;
  id: number;
};

const CIRCLE_LENGTH = 88;
const radios = CIRCLE_LENGTH / (2 * Math.PI);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const CloseButton = ({id, setIsOpen}: CloseButtonPropsType) => {
  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  useEffect(() => {
    progress.value = withTiming(1, {duration: 2900});
  }, [progress]);

  return (
    <View>
      <TouchableOpacity onPress={() => setIsOpen(id)}>
        <AntDesign name="close" size={22} color={Color.White} />
        <Svg style={styles.circle} width={30} height={30}>
          <Circle cx={15} cy={15} stroke={Color.Semitransparent} strokeWidth={2} r={radios} />
          <AnimatedCircle
            cx={15}
            cy={15}
            r={radios}
            stroke={Color.White}
            strokeWidth={2}
            strokeDasharray={CIRCLE_LENGTH}
            animatedProps={animatedProps}
            strokeLinecap="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    transform: [{rotate: '270deg'}],
  },
});
