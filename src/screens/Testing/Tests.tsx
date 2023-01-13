import React from 'react';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers/index';
import {ScreenList} from '@src/navigation/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootTestingParamsList} from 'src/customTypes/navigation-types';
import {TestProcess} from './TestProcess/index';
import {TestsList} from './TestsList/TestsList';

const Stack = createNativeStackNavigator<RootTestingParamsList>();

const Tests = () => {
  return (
    <ViewFlex>
      <Stack.Navigator>
        <Stack.Screen name={ScreenList.TESTS_LIST} component={TestsList} />
        <Stack.Screen name={ScreenList.TEST_PROCESS} component={TestProcess} />
      </Stack.Navigator>
    </ViewFlex>
  );
};

export default Tests;
