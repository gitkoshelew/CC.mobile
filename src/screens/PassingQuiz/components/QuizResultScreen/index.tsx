import {TestResult} from '@src/components/TestResult';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import {ProgressBar} from '@src/components/ProgressBar';
import {ViewBlockResult} from '@src/screens/PassingQuiz/components/QuizProcess/styles';
import {ColorContainer} from '@src/components/ui/ReadyStyles/Containers';
import {useAppNavigate, useAppSelector} from '@hooks/hooks';
import {ScreenList} from '@src/navigation/navigation';
import {IncorrectAnswer} from '@src/components/IncorrectAnswers';
import {RootTestingParamsList} from '@customTypes/navigation-types';
import {RouteProp} from '@react-navigation/native';

type QuizResultScreenPropsType = {
  route: RouteProp<RootTestingParamsList, ScreenList.QUIZ_RESULT>;
  onPressStartTesting: (id: number) => void;
};

export const QuizResultScreen = ({route, onPressStartTesting}: QuizResultScreenPropsType) => {
  const {navigate} = useAppNavigate();
  const resultData = useAppSelector(state => state.resultReducer.result);
  const incorrectData = resultData.filter(e => e.questionStatus === 'error');
  const correctData = resultData.filter(e => e.questionStatus === 'right');
  const progressData: IncorrectAnswer[] = incorrectData.map((e, i) => ({
    number: i + 1,
    answer: e.answer,
  }));
  const result = (100 / resultData.length) * correctData.length;
  const quizId = route.params.quizId;

  const onClickTry = () => {
    onPressStartTesting(quizId);
  };
  const onClickClose = () => {
    navigate(ScreenList.QUIZZES, {screen: ScreenList.QUIZZES_LIST});
  };

  return (
    <ColorContainer>
      <ViewBlockResult style={styles.result}>
        <ProgressBar data={resultData} />
      </ViewBlockResult>
      <ScrollView style={styles.testResult}>
        <TestResult
          result={result}
          onClickClose={onClickClose}
          onClickTry={onClickTry}
          incorrectAnswers={progressData}
        />
      </ScrollView>
    </ColorContainer>
  );
};
