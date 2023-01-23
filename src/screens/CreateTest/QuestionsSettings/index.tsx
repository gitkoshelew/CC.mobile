import {QuestionsTabs} from '@src/components/QuestionsTabs';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {CreateQuestion} from '../CreateQuestion/index';
import {useCallback, useEffect, useState} from 'react';
import {styles} from './styles';
import {useAppDispatch} from '@hooks/hooks';
import {getQuestions} from '@src/bll/testReducer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootCreateTestParamsList} from '@customTypes/navigation-types';
import {ScreenList} from '@src/navigation/navigation';

export const QuestionsSettings = ({
  route,
}: NativeStackScreenProps<
  RootCreateTestParamsList,
  ScreenList.QUESTIONS_SET
>) => {
  const createQuestionsTabs = [...Array(route.params.numberQuestions)].map(
    (_, index) => ({
      id: index + 1,
    }),
  );

  const dispatch = useAppDispatch();
  const [questions, setQuestions] = useState([{id: 1}]);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;
  const onPressCurrentQuestionPressed = useCallback(
    (id: number) => {
      setCurrentQuestion(questions.find(el => el.id === id)!);
    },
    [questions],
  );

  useEffect(() => {
    dispatch(getQuestions(route.params.idNewTest))
      .unwrap()
      .then(res => {
        setQuestions(res.question);
      });
  }, [dispatch, route.params.idNewTest]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={styles.container}>
      <View style={styles.ViewContainer}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={styles.inner}>
            <QuestionsTabs
              onPressCurrentQuestion={onPressCurrentQuestionPressed}
              questions={createQuestionsTabs}
              currentQuestionsId={currentQuestion.id}
            />
            <CreateQuestion />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
