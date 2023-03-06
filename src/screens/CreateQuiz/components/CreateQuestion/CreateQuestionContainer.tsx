import React, {useContext, useRef} from 'react';
import {
  CreateQuestion,
  CreateQuestionFieldType,
} from '@src/screens/CreateQuiz/components/CreateQuestion/CreateQuestion';
import {questionType} from '@customTypes/quiz-types';
import {transformFormatOptions} from '@src/utils/transformFormatOptions';
import {createQuestion} from '@src/screens/CreateQuiz/services/services';
import {getQuizQuestions} from '@src/bll/quizReducer';
import {useAppDispatch} from '@hooks/hooks';
import {transformTimeSerializer} from '@src/screens/CreateQuiz/serializer/index';
import {BlockLayout} from '@src/screens/CreateQuiz/components/CreateQuestion/styles';
import {ScrollView, StyleSheet} from 'react-native';
import {ThemeContext} from 'styled-components/native';

export type CreateQuestionPropsType = {
  quizId: number;
  changeQuestions: (value: questionType[]) => void;
  currentQuestion: questionType;
  numberOfQuestions: number;
  currentQuestionIndex: number;
  changeCurrentQuestionIndex: (value: number) => void;
};

export type SaveQuestionValuesType = {
  valuesFields: CreateQuestionFieldType;
  correctAnswers: string[];
};

export const CreateQuestionContainer = (props: CreateQuestionPropsType) => {
  const {
    quizId,
    changeQuestions,
    currentQuestion,
    numberOfQuestions,
    currentQuestionIndex,
    changeCurrentQuestionIndex,
  } = props;
  const dispatch = useAppDispatch();
  const theme = useContext(ThemeContext);
  const scrollRef = useRef<ScrollView>(null);

  const handlerSaveQuestion = async (values: SaveQuestionValuesType) => {
    const {valuesFields, correctAnswers} = values;
    const {options, ...restValuesFields} = valuesFields;
    const changedOptions = transformFormatOptions(options);
    const newQuestion = {
      ...restValuesFields,
      content: {options: changedOptions as string[], correctAnswer: correctAnswers},
      quizId,
    };

    await dispatch(
      createQuestion(transformTimeSerializer({newQuestion, format: 'onlySeconds'})),
    );
    const questions = await dispatch(getQuizQuestions(quizId)).unwrap();
    changeQuestions(questions.question);

    changeCurrentQuestionIndex(currentQuestionIndex + 1);
    scrollRef.current?.scrollTo({x: 0, y: 0, animated: true});
  };

  return (
    <ScrollView
      ref={scrollRef}
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: theme.layout}}>
      {currentQuestion.title && <BlockLayout style={StyleSheet.absoluteFill} />}
      <CreateQuestion
        currentQuestion={currentQuestion}
        numberOfQuestions={numberOfQuestions}
        onSaveQuestion={handlerSaveQuestion}
        currentQuestionIndex={currentQuestionIndex}
      />
    </ScrollView>
  );
};
