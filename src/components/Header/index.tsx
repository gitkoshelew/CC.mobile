import {UserIconContainer, Wrapper} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ViewCenter} from '../ui/ReadyStyles/Containers';
import {Title} from '../ui/ReadyStyles/Boxes';
import {View} from 'react-native';
import {useAppSelector} from '@hooks/hooks';

export const Header = () => {
  const userName = useAppSelector(state => state.authReducer.auth.name);

  return (
    <Wrapper>
      <View>
        <ViewCenter>
          <UserIconContainer>
            <FontAwesome name={'user'} size={80} />
          </UserIconContainer>
          <ViewCenter>
            <Title>{userName}</Title>
          </ViewCenter>
        </ViewCenter>
      </View>
    </Wrapper>
  );
};
