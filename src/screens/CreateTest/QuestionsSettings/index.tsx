import {QuestionsTabs} from '@src/components/QuestionsTabs';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {CreateQuestion} from '../CreateQuestion/index';
import {useCallback, useEffect, useState} from 'react';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootCreateTestParamsList} from '@customTypes/navigation-types';
import {ScreenList} from '@src/navigation/navigation';
import {Difficulty, questionType, TypeOptions} from '@customTypes/quiz-types';
import {getQuizQuestions} from '@src/bll/quizReducer';
import {CustomModal} from '@src/components/ui/Modal/index';
import {Loader} from '@src/components/ui/Loader/index';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;

export const QuestionsSettings = ({
  route,
}: NativeStackScreenProps<RootCreateTestParamsList, ScreenList.QUESTIONS_SET>) => {
  const newQuestion = useCallback(
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
      type: TypeOptions.single,
      topicId: 1,
      moderationId: null,
    }),
    [],
  );
  const dispatch = useAppDispatch();
  const listQuestionsTabs = [...Array(route.params.numberQuestions)].map((el, i) => i);
  const isFetching = useAppSelector(state => state.app.isFetching);
  const [questions, setQuestions] = useState<questionType[]>([newQuestion()]);
  const [currentQuestion, setCurrentQuestion] = useState<questionType>(questions[0]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onPressCurrentQuestionPressed = useCallback(
    (index: number) => {
      if (index > questions.length) {
        setIsModalVisible(true);
        return;
      }

      questions[index]
        ? setCurrentQuestion(questions[index])
        : setCurrentQuestion(newQuestion());
    },
    [newQuestion, questions],
  );

  useEffect(() => {
    dispatch(getQuizQuestions(route.params.idNewTest))
      .unwrap()
      .then(res => {
        if (res.question.length) {
          setQuestions(res.question);
          setCurrentQuestion(res.question[0]);
        }
      });
  }, [dispatch, route.params.idNewTest]);

  return (
    <>
      {isFetching && <Loader />}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={styles.container}>
        <View style={styles.ViewContainer}>
          <CustomModal
            isModalVisible={isModalVisible}
            onPress={setIsModalVisible}
            text="Create a question to move on to the next one"
          />
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.inner}>
              <QuestionsTabs
                onPressCurrentQuestion={onPressCurrentQuestionPressed}
                listQuestionsTabs={listQuestionsTabs}
                amountFilledQuestion={questions.length}
              />
              <CreateQuestion
                currentQuestion={currentQuestion}
                setQuestions={setQuestions}
                quizId={route.params.idNewTest}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
