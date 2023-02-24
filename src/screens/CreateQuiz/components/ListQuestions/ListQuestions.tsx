import {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Color} from '@theme/colors';
import {questionResponseType, questionType} from '@customTypes/quiz-types';
import {TabsQuestions} from '@src/screens/CreateQuiz/components/ListQuestions/TabsQuestions/index';
import {ListingQuestions} from '@src/screens/CreateQuiz/components/ListQuestions/ListingQuestions/ListingQuestions';

type ListQuestionsPropsType = {
  quizId: number;
  topics: string[];
  questions: questionResponseType[];
  currentQuizQuestions: questionType[];
  onPressAddQuestion: (questionId: number) => void;
};

export const ListQuestions = ({
  topics,
  questions,
  onPressAddQuestion,
  currentQuizQuestions,
}: ListQuestionsPropsType) => {
  const [filteredQuestions, setFilteredQuestions] =
    useState<questionResponseType[]>(questions);

  const handlerTabs = useCallback(
    (value: string) => {
      if (value === 'All') {
        setFilteredQuestions(questions);
        return;
      }
      setFilteredQuestions(questions.filter(el => el.topic.title === value));
    },
    [questions],
  );

  useEffect(() => {
    setFilteredQuestions(questions);
  }, [questions]);

  return (
    <View style={styles.wrapper}>
      <TabsQuestions topics={topics} onPressTabs={handlerTabs} />
      <View style={styles.container}>
        <ListingQuestions
          filteredQuestions={filteredQuestions}
          onPressAddQuestion={onPressAddQuestion}
          currentQuizQuestions={currentQuizQuestions}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Color.GrayLight,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  container: {
    marginBottom: 80,
  },
});
