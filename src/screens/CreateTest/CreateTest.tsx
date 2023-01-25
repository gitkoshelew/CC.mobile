import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TestSettings} from '../CreateTest/TestSettings';
import {QuestionsSettings} from './QuestionsSettings/index';
import {ScreenList} from '@src/navigation/navigation';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers';
import {RootCreateTestParamsList} from '@customTypes/navigation-types';

const Stack = createNativeStackNavigator<RootCreateTestParamsList>();

export const CreateTest = () => {
  return (
    <ViewFlex>
      <Stack.Navigator>
        <Stack.Screen name={ScreenList.TEST_SET} component={TestSettings} />
        <Stack.Screen name={ScreenList.QUESTIONS_SET} component={QuestionsSettings} />
      </Stack.Navigator>
    </ViewFlex>
  );
};
