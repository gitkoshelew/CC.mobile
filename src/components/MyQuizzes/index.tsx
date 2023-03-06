import React, {useContext} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '@src/components/MyQuizzes/styles';
import {ListQuizzes} from '@src/components/MyQuizzes/ListQuizzes';
import {CustomText, TextDescription} from '@src/components/ui/ReadyStyles/Boxes';
import {getQuizResponseType} from '@customTypes/quizzesAPI-types';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from 'styled-components/native';

const listImages = [
  require('../../assets/images/light.jpeg'),
  require('../../assets/images/medium.jpeg'),
  require('../../assets/images/hard.jpeg'),
];

type MyQuizzesType = {
  isLoggedIn: boolean;
  myQuizzes: getQuizResponseType[];
};

export const MyQuizzes = ({isLoggedIn, myQuizzes}: MyQuizzesType) => {
  const theme = useContext(ThemeContext);

  const {t} = useTranslation(['profile', 'validationFields']);
  return (
    <>
      <View style={styles().container}>
        <CustomText fs="20px" fw="bold" m="0 80px 0 0">
          {t('My quizzes')}
        </CustomText>
        <Text style={styles(theme).text}>{t('Difficulty')}</Text>
        <View style={styles().picker}>
          {listImages.map((el, i) => (
            <ImageBackground
              key={i}
              style={styles().imageContainer}
              source={el}
              resizeMode="stretch"
            />
          ))}
        </View>
      </View>
      {isLoggedIn ? (
        <ListQuizzes myQuizzes={myQuizzes} />
      ) : (
        <TextDescription>{t('Need to log in', {ns: 'validationFields'})}</TextDescription>
      )}
    </>
  );
};
