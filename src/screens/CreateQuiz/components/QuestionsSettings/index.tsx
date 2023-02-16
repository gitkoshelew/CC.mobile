import {QuestionsTabs} from '@src/components/QuestionsTabs';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootCreateQuizParamsList} from '@customTypes/navigation-types';
import {ScreenList} from '@src/navigation/navigation';
import {Difficulty, questionType, TypeOptions} from '@customTypes/quiz-types';
import {getQuizQuestions} from '@src/bll/quizReducer';
import {CustomModal} from '@src/components/ui/Modal/index';
import {Loader} from '@src/components/ui/Loader/index';
import {CreateQuestion} from '@src/screens/CreateQuiz/components/CreateQuestion/index';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;

export const QuestionsSettings = ({
  route,
}: NativeStackScreenProps<RootCreateQuizParamsList, ScreenList.QUESTIONS_SET>) => {
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
  const [activeTab, setActiveTab] = useState(0);
  const [questions, setQuestions] = useState<questionType[]>([newQuestion()]);
  const [currentQuestion, setCurrentQuestion] = useState<questionType>(questions[0]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const scroll = useRef(null);

  const onPressCurrentQuestionPressed = useCallback(
    (index: number) => {
      if (
        (!currentQuestion.title && index > questions.length - 1) ||
        index - questions.length > 0
      ) {
        setIsModalVisible(true);
        return;
      }

      setActiveTab(index);
      questions[index]
        ? setCurrentQuestion(questions[index])
        : setCurrentQuestion(newQuestion());
    },
    [currentQuestion.title, newQuestion, questions],
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
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            ref={scroll}>
            <View style={styles.inner}>
              <QuestionsTabs
                listQuestionsTabs={listQuestionsTabs}
                activeTab={activeTab}
                onPressCurrentQuestion={onPressCurrentQuestionPressed}
                amountFilledQuestion={questions.length}
              />
              <CreateQuestion
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                setQuestions={setQuestions}
                quizId={route.params.idNewTest}
                activeTab={activeTab}
                onPressCurrentQuestionPressed={onPressCurrentQuestionPressed}
                scrollRef={scroll}
                numberQuestions={route.params.numberQuestions}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
