import React, {memo, useCallback} from 'react';
import {FlatList, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '@src/components/MyQuizzes/ListQuizzes/styles';
import {imagesDifficulty} from '@src/utils/imagesDifficulty';
import {getQuizResponseType} from '@customTypes/quizzesAPI-types';
import {getQuizQuestions} from '@src/bll/quizReducer';
import {ScreenList} from '@src/navigation/navigation';
import {useAppDispatch, useAppNavigate} from '@hooks/hooks';
import {TextDescription} from '@src/components/ui/ReadyStyles/Boxes/index';

export const DIFFICULTY_ARRAY = ['light', 'medium', 'hard'];
type ListQuizzesType = {
  myQuizzes: getQuizResponseType[];
};

type RenderItemMemoType = {
  item: getQuizResponseType;
};

export const ListQuizzes = ({myQuizzes}: ListQuizzesType) => {
  const {navigate} = useAppNavigate();
  const dispatch = useAppDispatch();
  const onPressStartTestingHandler = useCallback(
    (id: number) => {
      dispatch(getQuizQuestions(id))
        .unwrap()
        .then(() => navigate(ScreenList.QUIZZES, {screen: ScreenList.QUIZ_PROCESS}));
    },
    [dispatch, navigate],
  );

  const RenderItemMemo = memo(({item}: RenderItemMemoType) => (
    <TouchableOpacity key={item.id} onPress={() => onPressStartTestingHandler(item.id)}>
      <View style={styles.wrapper}>
        <ImageBackground
          style={styles.imageBackground}
          source={randomDifficulty()}
          resizeMode="stretch">
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>Questions: {item.question.length}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  ));

  const randomDifficulty = useCallback(() => {
    const difficulty = DIFFICULTY_ARRAY[
      Math.floor(Math.random() * DIFFICULTY_ARRAY.length)
    ] as keyof typeof imagesDifficulty;

    return imagesDifficulty[difficulty];
  }, []);

  return myQuizzes.length ? (
    <FlatList
      style={styles.container}
      horizontal
      data={myQuizzes}
      renderItem={({item}) => <RenderItemMemo item={item} />}
    />
  ) : (
    <TextDescription>You don't have any quizzes</TextDescription>
  );
};
