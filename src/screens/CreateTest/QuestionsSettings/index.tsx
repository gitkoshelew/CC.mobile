import {QuestionsTabs} from '@src/components/QuestionsTabs/index';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {CreateQuestion} from '../CreateQuestion/index';
import {useCallback, useState} from 'react';
import {styles} from './styles';
import {RouteProp} from '@react-navigation/native';

type QuestionsSettingsPropsType = {
  route: RouteProp<{params: {numberQuestions: number}}, 'params'>;
};

export const QuestionsSettings = ({route}: QuestionsSettingsPropsType) => {
  const createQuestionsTabs = [...Array(route.params.numberQuestions)].map(
    (_, index) => ({
      id: index + 1,
    }),
  );

  const [questions] = useState(createQuestionsTabs);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;
  const onPressCurrentQuestionPressed = useCallback(
    (id: number) => {
      setCurrentQuestion(questions.find(el => el.id === id)!);
    },
    [questions],
  );

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
              questions={questions}
              currentQuestionsId={currentQuestion.id}
            />
            <CreateQuestion />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
