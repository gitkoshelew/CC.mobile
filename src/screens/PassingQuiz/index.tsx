import React, {useContext} from 'react';
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

const Stack = createNativeStackNavigator<RootTestingParamsList>();

export const Quizzes = () => {
  const theme = useContext(ThemeContext);

  return (
    <ViewFlex style={{backgroundColor: Color.Red}}>
      <Stack.Navigator
        initialRouteName={ScreenList.QUIZZES_LIST}
        screenOptions={{
          headerStyle: styles(theme).headerStyle,
          headerTitleStyle: styles(theme).headerTitleStyle,
        }}>
        <Stack.Screen name={ScreenList.QUIZZES_LIST} component={QuizList} />
        <Stack.Screen name={ScreenList.QUIZ_PROCESS} component={QuizProcess} />
        <Stack.Screen
          options={{headerShown: false}}
          name={ScreenList.QUIZ_RESULT}
          component={QuizResultScreen}
        />
      </Stack.Navigator>
    </ViewFlex>
  );
};
