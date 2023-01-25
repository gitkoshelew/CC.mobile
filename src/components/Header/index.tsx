import {UserIconContainer, Wrapper} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ViewCenter} from '../ui/ReadyStyles/Containers';
import * as AppButton from '../ui/AppButton';
import {useAppNavigate} from '@hooks/hooks';
import {ScreenList} from '@src/navigation/navigation';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import {Title} from '../ui/ReadyStyles/Boxes';

interface IProps {
  isOpen: boolean;
}

export const Header = ({isOpen}: IProps) => {
  const {navigate} = useAppNavigate();

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
        <ViewCenter>
          <UserIconContainer>
            <FontAwesome name={'user'} size={80} />
          </UserIconContainer>
          <ViewCenter>
            <Title>User Name</Title>
            <AppButton.AppButton
              title="Log In"
              type="primary"
              onPress={() => navigate(ScreenList.HOME, {screen: ScreenList.SIGN_IN})}
            />
          </ViewCenter>
        </ViewCenter>
      </Animated.View>
    </Wrapper>
  );
};
