import React from 'react';
import {FlatList, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '@src/components/MyQuizzes/ListQuizzes/styles';
import {imagesDifficulty} from '@src/utils/imagesDifficulty';
import {QuizzesMoc} from '@src/Mocs/Testing';

export const DIFFICULTY_ARRAY = ['light', 'medium', 'hard'];

export const ListQuizzes = () => {
  return (
    <FlatList
      style={styles.container}
      horizontal
      data={QuizzesMoc}
      renderItem={({item}) => (
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <ImageBackground
              style={styles.imageBackground}
              source={imagesDifficulty[item.difficulty as keyof typeof imagesDifficulty]}
              resizeMode="stretch">
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>Questions: {item.questions.length}</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
