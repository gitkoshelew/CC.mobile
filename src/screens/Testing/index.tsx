import React from 'react';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers';
import {ScreenList} from '@src/navigation/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootTestingParamsList} from 'src/customTypes/navigation-types';
import {TestResultScreen} from '@src/screens/Testing/components/TestResultScreen/index';
import {TestsList} from '@src/screens/Testing/components/TestsList/TestsList';
import {TestProcess} from '@src/screens/Testing/components/TestProcess/index';

const Stack = createNativeStackNavigator<RootTestingParamsList>();

export const Tests = () => {
  return (
    <ViewFlex>
      <Stack.Navigator initialRouteName={ScreenList.QUIZZES_LIST}>
        <Stack.Screen name={ScreenList.QUIZZES_LIST} component={TestsList} />
        <Stack.Screen
          options={{headerShown: false}}
          name={ScreenList.QUIZ_PROCESS}
          component={TestProcess}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={ScreenList.QUIZ_RESULT}
          component={TestResultScreen}
        />
      </Stack.Navigator>
    </ViewFlex>
  );
};
