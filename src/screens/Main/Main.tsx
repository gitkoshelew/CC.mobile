import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '@hooks/hooks';
import {login, register} from '@src/bll/authReducer';
import {Title, BlockBoxMarginRight} from '@src/components/ui/ReadyStyles/Boxes/index';
import {
  ViewCenter,
  ViewFlexForTwoElements,
} from '@src/components/ui/ReadyStyles/Containers/index';
import {UserIconContainer} from '@src/components/Header/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LateralBall} from '@src/components/LateralBall/index';
import {CentralBall} from '@src/components/CentralBall/index';
import {MyQuizzes} from '@src/components/MyQuizzes/index';
import {MemoryCardsList} from '@src/components/MemoryCardsList/index';
import {AppButton} from '@src/components/ui/AppButton/index';
import {TypeAppButton} from '@customTypes/AppButtun-types';

export const Main = () => {
  const dispatch = useAppDispatch();
  const onPressLogin = () => {
    dispatch(login());
  };
  const onPressRegister = () => {
    dispatch(register());
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.aboutUser}>
        <View style={styles.containerProfile}>
          <Image
            style={styles.backgroundImage}
            source={require('../../assets/images/background-second.png')}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.profile}>
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
        </View>
        <View style={styles.containerBalls}>
          <LateralBall value="73%" description="Success" />
          <CentralBall value={99} description="Quizzes" />
          <LateralBall value="1" description="Ranks" />
        </View>
      </View>

      <View style={styles.content}>
        <MyQuizzes />
        <MemoryCardsList />
        <ViewFlexForTwoElements>
          <BlockBoxMarginRight>
            <TouchableOpacity>
              <AppButton title="login" type={TypeAppButton.PRIMARY} onPress={onPressLogin} />
            </TouchableOpacity>
          </BlockBoxMarginRight>
          <TouchableOpacity>
            <AppButton
              title="registration"
              type={TypeAppButton.PRIMARY}
              onPress={onPressRegister}
            />
          </TouchableOpacity>
        </ViewFlexForTwoElements>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  aboutUser: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 80,
    paddingHorizontal: 20,
  },
  containerProfile: {
    position: 'absolute',
    top: -180,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    borderBottomLeftRadius: 130,
    borderBottomRightRadius: 130,
    width: 500,
    height: 500,
  },
  profile: {
    marginTop: 50,
    marginBottom: 60,
  },
  containerBalls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  content: {
    flex: 1,
    paddingLeft: 20,
    marginBottom: 50,
  },
});
