import {TestResult} from '@src/components/TestResult';
import {View} from 'react-native';
import {styles} from './styles';
import {ProgressBar} from '@src/components/ProgressBar';
import {ViewBlockResult} from '@src/screens/Testing/TestProcess/styles';
import React from 'react';
import {ViewContainer} from '@src/components/ui/ReadyStyles/Containers';
import {useAppNavigate, useAppSelector} from '@hooks/hooks';
import {IncorrectAnswer} from '@src/components/Incorrectanswers';
import {ScreenList} from '@src/navigation/navigation';

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
    navigate(ScreenList.TESTS, {screen: ScreenList.TESTS_LIST});
  };
  const onClickClose = () => {
    navigate(ScreenList.HOME, {screen: ScreenList.MAIN});
  };
  return (
    <ViewContainer>
      <ViewBlockResult style={styles.result}>
        <ProgressBar data={resultData} />
      </ViewBlockResult>
      <View>
        <TestResult
          result={result}
          onClickClose={onClickClose}
          onClickTry={onClickTry}
          incorrectAnswers={progressData}
        />
      </View>
    </ViewContainer>
  );
};
