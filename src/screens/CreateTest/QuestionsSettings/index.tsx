import {QuestionsTabs} from '@src/components/QuestionsTabs/index';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {CreateQuestion} from '../CreateQuestion/index';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {styles} from './styles';
import {useAppDispatch} from '@hooks/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootCreateTestParamsList} from '@customTypes/navigation-types';
import {ScreenList} from '@src/navigation/navigation';
import {Difficulty, questionType, TypeOptions} from '@customTypes/test-types';
import {getQuestions} from '@src/bll/testReducer';

export const QuestionsSettings = ({
  route,
}: NativeStackScreenProps<RootCreateTestParamsList, ScreenList.QUESTIONS_SET>) => {
  const newQuestion = useMemo(
    () => ({
      id: Math.random(),
      title: '',
      description: '',
      content: {
        options: ['', ''],
        correctAnswer: [],
      },
      difficulty: Difficulty.Easy,
      timer: 0,
      type: TypeOptions.Single,
      topicId: 1,
      moderationId: null,
    }),
    [],
  );
  const dispatch = useAppDispatch();
  const listQuestionsTabs = [...Array(route.params.numberQuestions)].map((el, i) => i);
  const [questions, setQuestions] = useState<questionType[]>([newQuestion]);
  const [currentQuestion, setCurrentQuestion] = useState<questionType>(questions[0]);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;

  const onPressCurrentQuestionPressed = useCallback(
    (index: number) => {
      if (questions[index]) {
        setCurrentQuestion(questions[index]);
      } else {
        setCurrentQuestion(newQuestion);
      }
    },
    [newQuestion, questions],
  );

  useEffect(() => {
    dispatch(getQuestions(route.params.idNewTest))
      .unwrap()
      .then(res => {
        if (res.question.length) {
          setQuestions(res.question);
          setCurrentQuestion(res.question[0]);
        }
      });
  }, [dispatch, route.params.idNewTest]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={styles.container}>
      <View style={styles.ViewContainer}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.inner}>
            <QuestionsTabs
              onPressCurrentQuestion={onPressCurrentQuestionPressed}
              listQuestionsTabs={listQuestionsTabs}
            />
            <CreateQuestion
              currentQuestion={currentQuestion}
              setQuestions={setQuestions}
              questions={questions}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
