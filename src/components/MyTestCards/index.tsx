import {Dimensions, Text} from 'react-native';
import {styles} from './styles';
import {AppButton} from '../ui/AppButton';
import {TypeAppButton} from '@customTypes/AppButtun-types';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Color} from '@theme/colors';

interface ITestCard extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  id: number;
  onPress: (id: number) => void;
  title: string;
  onDismiss?: (id: number) => void;
}
export const LIST_ITEM_HEIGHT = 70;

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.2;

export const MyTestCards = ({
  onPress,
  title,
  id,
  onDismiss,
  simultaneousHandlers,
}: ITestCard) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);
  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0, undefined, isFinished => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(id);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });
  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));
  const rIconContainerStyle = useAnimatedStyle(() => {
    return {opacity: withTiming(translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0)};
  });

  const rTaskContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.container, rTaskContainerStyle]}>
      <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
        <Icon name="trash" size={40} color={Color.Red} />
      </Animated.View>
      <PanGestureHandler
        onGestureEvent={panGesture}
        simultaneousHandlers={simultaneousHandlers}>
        <Animated.View style={[styles.test, rStyle]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>Description</Text>
          <AppButton type={TypeAppButton.PRIMARY} title="Start" onPress={() => onPress(id)} />
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};
