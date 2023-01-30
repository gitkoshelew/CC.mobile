import React from 'react';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers';
import {ScreenList} from '@src/navigation/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootTestingParamsList} from 'src/customTypes/navigation-types';
import {TestProcess} from './TestProcess/index';
import {TestsList} from './TestsList/TestsList';
import {TestResultScreen} from './TestResultScreen';

const Stack = createNativeStackNavigator<RootTestingParamsList>();

const Tests = () => {
  return (
    <ViewFlex>
      <Stack.Navigator initialRouteName={ScreenList.TESTS_LIST}>
        <Stack.Screen name={ScreenList.TESTS_LIST} component={TestsList} />
        <Stack.Screen
          options={{headerShown: false}}
          name={ScreenList.TEST_PROCESS}
          component={TestProcess}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={ScreenList.TEST_RESULT}
          component={TestResultScreen}
        />
      </Stack.Navigator>
    </ViewFlex>
  );
};

export default Tests;
