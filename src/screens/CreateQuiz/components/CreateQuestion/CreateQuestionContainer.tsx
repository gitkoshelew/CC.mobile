import {memo, useContext, useRef} from 'react';
import {
  CreateQuestion,
  CreateQuestionFieldType,
} from '@src/screens/CreateQuiz/components/CreateQuestion/CreateQuestion';
import {questionType} from '@customTypes/quiz-types';
import {createQuestion} from '@src/screens/CreateQuiz/services/services';
import {getQuizQuestions} from '@src/bll/quizReducer';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {transformTimeSerializer} from '@src/screens/CreateQuiz/serializers/transformTimeSerializer';
import {BlockLayout} from '@src/screens/CreateQuiz/components/CreateQuestion/styles';
import {ScrollView, StyleSheet} from 'react-native';
import {ThemeContext} from 'styled-components/native';
import {CurrentQuestionType} from '@src/screens/CreateQuiz/utils/getNewQuestion';

export type CreateQuestionPropsType = {
  quizId: number;
  changeQuestions: (value: questionType[]) => void;
  currentQuestion: CurrentQuestionType;
  currentQuestionIndex: number;
  changeCurrentQuestionIndex: (value: number) => void;
};

export type CreateQuestionValuesType = CreateQuestionFieldType & {
  correctAnswers: string[];
  quizId: number;
};

export type SaveQuestionValuesType = Omit<CreateQuestionValuesType, 'quizId'>;

export const CreateQuestionContainer = memo((props: CreateQuestionPropsType) => {
  const {
    quizId,
    changeQuestions,
    currentQuestion,
    currentQuestionIndex,
    changeCurrentQuestionIndex,
  } = props;
  const dispatch = useAppDispatch();
  const isScrollEnabled = useAppSelector(state => state.app.isScrollEnabled);
  const theme = useContext(ThemeContext);
  const scrollRef = useRef<ScrollView>(null);

  const handlerSaveQuestion = async (values: SaveQuestionValuesType) => {
    await dispatch(createQuestion(transformTimeSerializer({...values, quizId})));
    const questions = await dispatch(getQuizQuestions(quizId)).unwrap();
    changeQuestions(questions.question);

    changeCurrentQuestionIndex(currentQuestionIndex + 1);
    scrollRef.current?.scrollTo({x: 0, y: 0, animated: true});
  };

  return (
    <ScrollView
      ref={scrollRef}
      showsVerticalScrollIndicator={false}
      scrollEnabled={isScrollEnabled}
      style={{backgroundColor: theme.layout}}>
      {currentQuestion.title && <BlockLayout style={StyleSheet.absoluteFill} />}
      <CreateQuestion currentQuestion={currentQuestion} onSaveQuestion={handlerSaveQuestion} />
    </ScrollView>
  );
});
