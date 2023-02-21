import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {login, register} from '@src/bll/authReducer';
import {Title, BlockBoxMarginRight} from '@src/components/ui/ReadyStyles/Boxes';
import {ViewCenter, ViewFlexForTwoElements} from '@src/components/ui/ReadyStyles/Containers';
import {UserIconContainer} from '@src/components/Header/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LateralBall} from '@src/components/LateralBall';
import {CentralBall} from '@src/components/CentralBall';
import {MyQuizzes} from '@src/components/MyQuizzes';
import {MemoryCardsList} from '@src/components/MemoryCardsList';
import {AppButton} from '@src/components/ui/AppButton';
import {TypeAppButton} from '@customTypes/AppButtun-types';
import {styles} from '@src/screens/Main/Main/styles';
import {useEffect} from 'react';
import {getQuizzes} from '@src/bll/quizReducer';

export const Main = () => {
  const dispatch = useAppDispatch();
  const authData = useAppSelector(state => state.authReducer.auth);
  const isLogin = useAppSelector(state => state.app.isLogin);
  const allQuizzes = useAppSelector(state => state.quizReducer.quizzes);
  const authorId = useAppSelector(state => state.authReducer.auth.id);
  const myQuizzes = allQuizzes.filter(quiz => quiz.authorId === authorId);
  const onPressLogin = () => {
    dispatch(login())
      .unwrap()
      .then(() => {
        dispatch(getQuizzes());
      });
  };
  const onPressRegister = () => {
    dispatch(register());
  };
  useEffect(() => {
    isLogin && dispatch(getQuizzes());
  }, [dispatch, isLogin]);

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.aboutUser}>
        <View style={styles.containerProfile}>
          <Image
            style={styles.backgroundImage}
            source={require('../../../assets/images/background-second.png')}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.profile}>
          <View>
            <ViewCenter>
              <UserIconContainer>
                <FontAwesome
                  name={isLogin ? 'user' : 'user-secret'}
                  size={80}
                  style={!isLogin && styles.icon}
                />
              </UserIconContainer>
              <ViewCenter>
                <Title>{isLogin ? authData.nickname : 'Incognito'}</Title>
              </ViewCenter>
            </ViewCenter>
          </View>
        </View>
        <View style={styles.containerBalls}>
          <LateralBall value={isLogin ? '73%' : '0'} description="Success" />
          <CentralBall value={isLogin ? myQuizzes.length : 0} description="Quizzes" />
          <LateralBall value={isLogin ? '1' : '0'} description="Ranks" />
        </View>
      </View>
      <View style={styles.content}>
        <MyQuizzes isLogin={isLogin} myQuizzes={myQuizzes} />
        <MemoryCardsList isLogin={isLogin} />
      </View>
      {!isLogin && (
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
      )}
    </ScrollView>
  );
};
