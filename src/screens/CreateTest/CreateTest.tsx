import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootCreateTestParamsList} from '@customTypes/navigation-types';
import {TestSettings} from './TestSettings';
import {QuestionsSettings} from './QuestionsSettings/index';
import {ScreenList} from '../../navigation/navigation';
import {ViewFlex} from '../../components/ui/ReadyStyles/Containers';

const Stack = createNativeStackNavigator<RootCreateTestParamsList>();

export const CreateTest = () => {
  return (
    <ViewFlex>
      <Stack.Navigator>
        <Stack.Screen name={ScreenList.TEST_SET} component={TestSettings} />
        <Stack.Screen
          name={ScreenList.QUESTIONS_SET}
          component={QuestionsSettings}
        />
      </Stack.Navigator>
    </ViewFlex>
  );
};
