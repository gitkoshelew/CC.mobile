import {QuestionsTabs} from '@src/components/QuestionsTabs';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from './styles';
import {questionType} from '@customTypes/quiz-types';
import {CustomModal} from '@src/components/ui/Modal/index';
import {getNewQuestion} from '@src/screens/CreateQuiz/utils/getNewQuestion';
import {CreateQuestionContainer} from '@src/screens/CreateQuiz/components/CreateQuestion/CreateQuestionContainer';
import {ListQuestionsContainer} from '@src/screens/CreateQuiz/components/ListQuestions/ListQuestionsContainer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ScreenList} from '@src/navigation/navigation';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;

type QuestionsSettingsPropsType = {
  topicId: number;
  questions: questionType[];
  idNewQuiz: number;
  changeQuestions: (value: questionType[]) => void;
  numberOfQuestions: number;
};

const Tab = createMaterialTopTabNavigator();

export const QuestionsSettings = ({
  topicId,
  questions,
  idNewQuiz,
  changeQuestions,
  numberOfQuestions,
}: QuestionsSettingsPropsType) => {
  const listQuestionsTabs = [...Array(numberOfQuestions)].map((el, i) => i);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const currentQuestion = questions[currentQuestionIndex] || {...getNewQuestion(), topicId};

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
        <View style={styles.container}>
          <View style={styles.inner}>
            <QuestionsTabs
              activeTab={currentQuestionIndex}
              listQuestionsTabs={listQuestionsTabs}
              amountFilledQuestion={questions.length}
              onPressCurrentQuestion={onPressCurrentQuestionPressed}
            />
            <View style={styles.tabsContainer}>
              <Tab.Navigator
                screenOptions={{
                  tabBarStyle: styles.tabBarStyle,
                  tabBarIndicatorContainerStyle: styles.tabBarIndicatorContainerStyle,
                }}>
                <Tab.Screen
                  name={ScreenList.CREATE_QUESTION}
                  children={() => (
                    <CreateQuestionContainer
                      quizId={idNewQuiz}
                      changeQuestions={changeQuestions}
                      currentQuestion={currentQuestion}
                      numberOfQuestions={numberOfQuestions}
                      currentQuestionIndex={currentQuestionIndex}
                      onPressCurrentQuestionPressed={onPressCurrentQuestionPressed}
                    />
                  )}
                />
                <Tab.Screen
                  name={ScreenList.LIST_QUESTIONS}
                  component={ListQuestionsContainer}
                />
              </Tab.Navigator>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
