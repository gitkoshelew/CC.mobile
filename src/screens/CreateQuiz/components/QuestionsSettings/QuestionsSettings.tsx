import {QuestionsTabs} from '@src/components/QuestionsTabs';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {useCallback, useRef, useState} from 'react';
import {styles} from './styles';
import {questionType} from '@customTypes/quiz-types';
import {CustomModal} from '@src/components/ui/Modal/index';
import {getNewQuestion} from '@src/screens/CreateQuiz/utils/getNewQuestion';
import {CreateQuestionContainer} from '@src/screens/CreateQuiz/components/CreateQuestion/CreateQuestionContainer';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;

type QuestionsSettingsPropsType = {
  questions: questionType[];
  idNewQuiz: number;
  changeQuestions: (value: questionType[]) => void;
  numberOfQuestions: number;
};

export const QuestionsSettings = ({
  questions,
  idNewQuiz,
  changeQuestions,
  numberOfQuestions,
}: QuestionsSettingsPropsType) => {
  const listQuestionsTabs = [...Array(numberOfQuestions)].map((el, i) => i);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const scrollRef = useRef(null);

  const currentQuestion = questions[currentQuestionIndex] || getNewQuestion();

  const onPressCurrentQuestionPressed = useCallback(
    (index: number) => {
      if (
        (!currentQuestion.title && index > questions.length - 1) ||
        index - questions.length > 0
      ) {
        setIsModalVisible(true);
        return;
      }

      setCurrentQuestionIndex(index);
    },
    [currentQuestion.title, questions.length],
  );

  return (
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
          ref={scrollRef}
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={styles.inner}>
            <QuestionsTabs
              activeTab={currentQuestionIndex}
              listQuestionsTabs={listQuestionsTabs}
              amountFilledQuestion={questions.length}
              onPressCurrentQuestion={onPressCurrentQuestionPressed}
            />
            <CreateQuestionContainer
              quizId={idNewQuiz}
              scrollRef={scrollRef}
              changeQuestions={changeQuestions}
              currentQuestion={currentQuestion}
              numberOfQuestions={numberOfQuestions}
              currentQuestionIndex={currentQuestionIndex}
              onPressCurrentQuestionPressed={onPressCurrentQuestionPressed}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
