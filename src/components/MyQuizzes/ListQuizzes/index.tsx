import React from 'react';
import {FlatList, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '@src/components/MyQuizzes/ListQuizzes/styles';
import {imagesDifficulty} from '@src/utils/imagesDifficulty';

export const ListQuizzes = () => {
  const difficultyArray = ['light', 'medium', 'hard'];
  const fakeQuizzes = [...Array(10)].map((el, i) => ({
    id: i,
    title: 'Node',
    difficulty: difficultyArray[Math.floor(Math.random() * difficultyArray.length)],
    countQuestion: [...Array(Math.floor(Math.random() * (30 - 10) + 10))],
  }));

  return (
    <FlatList
      style={styles.container}
      horizontal
      data={fakeQuizzes}
      renderItem={({item}) => (
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <ImageBackground
              style={styles.imageBackground}
              source={imagesDifficulty[item.difficulty as keyof typeof imagesDifficulty]}
              resizeMode="stretch">
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>Questions: {item.countQuestion.length}</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
