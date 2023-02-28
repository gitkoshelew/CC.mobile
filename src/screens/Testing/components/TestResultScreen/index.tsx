import {TestResult} from '@src/components/TestResult';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import {ProgressBar} from '@src/components/ProgressBar';
import {ViewBlockResult} from '@src/screens/Testing/components/TestProcess/styles';
import React from 'react';
import {ViewContainer} from '@src/components/ui/ReadyStyles/Containers';
import {useAppNavigate, useAppSelector} from '@hooks/hooks';
import {ScreenList} from '@src/navigation/navigation';
import {IncorrectAnswer} from '@src/components/IncorrectAnswers';

export const TestResultScreen = () => {
  const {navigate} = useAppNavigate();
  const resultData = useAppSelector(state => state.resultReducer.result);
  const incorrectData = resultData.filter(e => e.questionStatus === 'error');
  const correctData = resultData.filter(e => e.questionStatus === 'right');
  const progressData: IncorrectAnswer[] = incorrectData.map(e => ({
    number: e.id,
    answer: e.answer,
  }));
  const result = (100 / resultData.length) * correctData.length;
  const onClickTry = () => {
    navigate(ScreenList.QUIZZES, {screen: ScreenList.QUIZZES_LIST});
  };
  const onClickClose = () => {
    navigate(ScreenList.HOME, {screen: ScreenList.MAIN});
  };
  return (
    <ViewContainer>
      <ViewBlockResult style={styles.result}>
        <ProgressBar data={resultData} />
      </ViewBlockResult>
      <ScrollView>
        <View style={styles.testResult}>
          <TestResult
            result={result}
            onClickClose={onClickClose}
            onClickTry={onClickTry}
            incorrectAnswers={progressData}
          />
        </View>
      </ScrollView>
    </ViewContainer>
  );
};
