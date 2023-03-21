import React, {useCallback, useContext, useState} from 'react';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers';
import {ScreenList} from '@src/navigation/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootTestingParamsList} from 'src/customTypes/navigation-types';
import {QuizResultScreen} from '@src/screens/PassingQuiz/components/QuizResultScreen';
import {QuizList} from '@src/screens/PassingQuiz/components/QuizList';
import {QuizProcess} from '@src/screens/PassingQuiz/components/QuizProcess';
import {ThemeContext} from 'styled-components/native';
import {Color} from '@theme/colors';
import {styles} from '@src/components/ui/ReadyStyles/navigatorStyle';
import {getQuizQuestions} from '@src/bll/quizReducer';
import {clearStateResult} from '@src/bll/resultReducer';
import {useAppDispatch, useAppNavigate} from '@hooks/hooks';

const Stack = createNativeStackNavigator<RootTestingParamsList>();

export const Quizzes = () => {
  const theme = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const {navigate} = useAppNavigate();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlerStartTesting = useCallback(
    (id: number) => {
      dispatch(getQuizQuestions(id))
        .unwrap()
        .then(res => {
          if (!res.question.length) {
            setIsModalVisible(true);
            return;
          }
          navigate(ScreenList.QUIZZES, {screen: ScreenList.QUIZ_PROCESS});
        });
      dispatch(clearStateResult());
    },
    [dispatch, navigate],
  );

  return (
    <ViewFlex style={{backgroundColor: Color.Red}}>
      <Stack.Navigator
        initialRouteName={ScreenList.QUIZZES_LIST}
        screenOptions={{
          headerStyle: styles(theme).headerStyle,
          headerTitleStyle: styles(theme).headerTitleStyle,
        }}>
        <Stack.Screen
          name={ScreenList.QUIZZES_LIST}
          children={() => (
            <QuizList
              onPressStartTesting={handlerStartTesting}
              setIsModalVisible={setIsModalVisible}
              isModalVisible={isModalVisible}
            />
          )}
        />
        <Stack.Screen name={ScreenList.QUIZ_PROCESS} component={QuizProcess} />
        <Stack.Screen
          options={{headerShown: false}}
          name={ScreenList.QUIZ_RESULT}
          children={({route}) => (
            <QuizResultScreen onPressStartTesting={handlerStartTesting} route={route} />
          )}
        />
      </Stack.Navigator>
    </ViewFlex>
  );
};
