import {Image, ScrollView, View} from 'react-native';
import {useAppSelector} from '@hooks/hooks';
import {CustomText, Title} from '@src/components/ui/ReadyStyles/Boxes';
import {ViewCenter} from '@src/components/ui/ReadyStyles/Containers';
import {UserIconContainer} from '@src/components/Header/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LateralBall} from '@src/components/LateralBall';
import {CentralBall} from '@src/components/CentralBall';
import {MyQuizzes} from '@src/components/MyQuizzes';
import {MemoryCardsList} from '@src/components/MemoryCardsList';
import {styles} from '@src/screens/Main/Main/styles';
import {Color} from '@theme/colors';
import {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import {useTranslation} from 'react-i18next';

export const Main = () => {
  const {t} = useTranslation('profile');
  const userData = useAppSelector(state => state.authReducer.auth);
  const isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn);
  const allQuizzes = useAppSelector(state => state.quizReducer.quizzes);
  const authorId = useAppSelector(state => state.authReducer.auth.id);
  const isScrollEnabled = useAppSelector(state => state.app.isScrollEnabled);
  const myQuizzes = allQuizzes.filter(quiz => quiz.authorId === authorId);
  const theme = useContext(ThemeContext);

  return (
    <ScrollView style={styles(theme).wrapper} scrollEnabled={isScrollEnabled}>
      <View style={styles().aboutUser}>
        <View style={styles().containerProfile}>
          <Image
            style={styles().backgroundImage}
            source={require('../../../assets/images/background-second.png')}
            resizeMode="stretch"
          />
        </View>
        <View style={styles().profile}>
          <ViewCenter>
            <UserIconContainer>
              <FontAwesome
                name={isLoggedIn ? 'user' : 'user-secret'}
                size={80}
                style={!isLoggedIn && styles().icon}
              />
            </UserIconContainer>
            <ViewCenter>
              <CustomText fs="22px" color={Color.Semitransparent}>
                {isLoggedIn && userData.name}
              </CustomText>
              <Title>{isLoggedIn ? userData.nickname : t('Incognito')}</Title>
            </ViewCenter>
          </ViewCenter>
        </View>
        <View style={styles().containerBalls}>
          <LateralBall value={isLoggedIn ? '73%' : '0'} description={t('Success')} />
          <CentralBall value={isLoggedIn ? myQuizzes.length : 0} description={t('Quizzes')} />
          <LateralBall value={isLoggedIn ? '1' : '0'} description={t('Ranks')} />
        </View>
      </View>
      <View style={styles().content}>
        <MyQuizzes isLoggedIn={isLoggedIn} myQuizzes={myQuizzes} />
        <MemoryCardsList isLoggedIn={isLoggedIn} />
      </View>
    </ScrollView>
  );
};
