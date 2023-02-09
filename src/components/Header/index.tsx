import {UserIconContainer, Wrapper} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ViewCenter} from '../ui/ReadyStyles/Containers';
import {Title} from '../ui/ReadyStyles/Boxes';
import {View} from 'react-native';

export const Header = () => {
  return (
    <Wrapper>
      <View>
        <ViewCenter>
          <UserIconContainer>
            <FontAwesome name={'user'} size={80} />
          </UserIconContainer>
          <ViewCenter>
            <Title>User Name</Title>
          </ViewCenter>
        </ViewCenter>
      </View>
    </Wrapper>
  );
};
