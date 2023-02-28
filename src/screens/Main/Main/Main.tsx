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

export const Main = () => {
  const userData = useAppSelector(state => state.authReducer.auth);
  const isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn);
  const allQuizzes = useAppSelector(state => state.quizReducer.quizzes);
  const authorId = useAppSelector(state => state.authReducer.auth.id);
  const myQuizzes = allQuizzes.filter(quiz => quiz.authorId === authorId);

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
          <ViewCenter>
            <UserIconContainer>
              <FontAwesome
                name={isLoggedIn ? 'user' : 'user-secret'}
                size={80}
                style={!isLoggedIn && styles.icon}
              />
            </UserIconContainer>
            <ViewCenter>
              <CustomText fs="22px" color={Color.Semitransparent}>
                {isLoggedIn && userData.name}
              </CustomText>
              <Title>{isLoggedIn ? userData.nickname : 'Incognito'}</Title>
            </ViewCenter>
          </ViewCenter>
        </View>
        <View style={styles.containerBalls}>
          <LateralBall value={isLoggedIn ? '73%' : '0'} description="Success" />
          <CentralBall value={isLoggedIn ? myQuizzes.length : 0} description="Quizzes" />
          <LateralBall value={isLoggedIn ? '1' : '0'} description="Ranks" />
        </View>
      </View>
      <View style={styles.content}>
        <MyQuizzes isLoggedIn={isLoggedIn} myQuizzes={myQuizzes} />
        <MemoryCardsList isLoggedIn={isLoggedIn} />
      </View>
    </ScrollView>
  );
};
