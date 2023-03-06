import React, {useContext} from 'react';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers';
import {ScreenList} from '@src/navigation/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootTestingParamsList} from 'src/customTypes/navigation-types';
import {TestResultScreen} from '@src/screens/Testing/components/TestResultScreen';
import {TestsList} from '@src/screens/Testing/components/TestsList/TestsList';
import {TestProcess} from '@src/screens/Testing/components/TestProcess';
import {ThemeContext} from 'styled-components/native';
import {Color} from '@theme/colors';
import {styles} from '@src/components/ui/ReadyStyles/navigatorStyle';

const Stack = createNativeStackNavigator<RootTestingParamsList>();

export const Tests = () => {
  const theme = useContext(ThemeContext);

  return (
    <ViewFlex style={{backgroundColor: Color.Red}}>
      <Stack.Navigator
        initialRouteName={ScreenList.QUIZZES_LIST}
        screenOptions={{
          headerStyle: styles(theme).headerStyle,
          headerTitleStyle: styles(theme).headerTitleStyle,
        }}>
        <Stack.Screen name={ScreenList.QUIZZES_LIST} component={TestsList} />
        <Stack.Screen name={ScreenList.QUIZ_PROCESS} component={TestProcess} />
        <Stack.Screen
          options={{headerShown: false}}
          name={ScreenList.QUIZ_RESULT}
          component={TestResultScreen}
        />
      </Stack.Navigator>
    </ViewFlex>
  );
};
