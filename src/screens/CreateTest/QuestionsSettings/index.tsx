import {QuestionsTabs} from '@src/components/QuestionsTabs/index';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {CreateQuestion} from '../CreateQuestion/index';
import {useEffect, useState} from 'react';
import {styles} from './styles';
import {useAppDispatch} from '@hooks/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootCreateTestParamsList} from '@customTypes/navigation-types';
import {ScreenList} from '@src/navigation/navigation';
import {Difficulty, questionType, TypeOptions} from '@customTypes/test-types';

export const QuestionsSettings = ({
  route,
}: NativeStackScreenProps<
  RootCreateTestParamsList,
  ScreenList.QUESTIONS_SET
>) => {
  const createQuestions = [...Array(route.params.numberQuestions)].map(
    (_, index) => ({
      id: index + 1,
      title: '',
      description: '',
      content: {
        options: [{option: ''}, {option: ''}],
        correctAnswer: [],
      },
      difficulty: Difficulty.Easy,
      timer: 0,
      type: TypeOptions.Single,
      topicId: 1,
      moderationId: null,
    }),
  );
  // const createQuestionsTabs = [...Array(route.params.numberQuestions)].map(
  //   (el, i) => (el = i + 1),
  // );
  const dispatch = useAppDispatch();
  const [questions, setQuestions] = useState<questionType[]>(createQuestions);
  const [currentQuestion, setCurrentQuestion] = useState<questionType>(
    createQuestions[0],
  );
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;
  const onPressCurrentQuestionPressed = (id: number) => {
    setCurrentQuestion(questions.find(el => el.id === id)!);
  };

  useEffect(() => {
    // dispatch(getQuestions(route.params.idNewTest))
    //   .unwrap()
    //   .then(res => {
    //     setQuestions(res.question);
    //     console.log(res.question);
    //   });
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
              questions={createQuestions}
              currentQuestionsId={currentQuestion.id}
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
