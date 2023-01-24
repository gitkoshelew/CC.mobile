import {UserIconContainer, Wrapper} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ViewCenter, ViewRightBotton} from '../ui/ReadyStyles/Containers';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {BlockBoxMarginRight, Title} from '../ui/ReadyStyles/Boxes';
import {SmallButton} from '../ui/SmallButton';

interface IProps {
  isOpen: boolean;
}

export const Header = ({isOpen}: IProps) => {
  const opacityValue = useSharedValue(0);

  const opacity = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
    };
  });

  const changeOpacity = () => {
    isOpen
      ? (opacityValue.value = withTiming(1, {duration: 1500}))
      : (opacityValue.value = withTiming(0, {duration: 300}));
  };

  isOpen ? changeOpacity() : changeOpacity();

  return (
    <Wrapper>
      <Animated.View style={opacity}>
        <ViewRightBotton>
          <BlockBoxMarginRight>
            <SmallButton type="theme" onPress={() => {}} />
          </BlockBoxMarginRight>
          <BlockBoxMarginRight>
            <SmallButton type="exit" onPress={() => {}} />
          </BlockBoxMarginRight>
        </ViewRightBotton>
        <ViewCenter>
          <UserIconContainer>
            <FontAwesome name={'user'} size={80} />
          </UserIconContainer>
          <ViewCenter>
            <Title>User Name</Title>
          </ViewCenter>
        </ViewCenter>
      </Animated.View>
    </Wrapper>
  );
};
