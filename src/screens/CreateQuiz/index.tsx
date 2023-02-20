import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenList} from '@src/navigation/navigation';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers';
import {RootCreateQuizParamsList} from '@customTypes/navigation-types';
import {QuizSettingsContainer} from '@src/screens/CreateQuiz/components/QuizSettings/QuizSettingsContainer';
import {QuestionsSettingsContainer} from '@src/screens/CreateQuiz/components/QuestionsSettings/QuestionsSettingsContainer';
import {MainCreation} from '@src/screens/CreateQuiz/components/MainCreation/index';

const Stack = createNativeStackNavigator<RootCreateQuizParamsList>();

export const CreateTest = () => {
  return (
    <ViewFlex>
      <Stack.Navigator>
        <Stack.Screen name={ScreenList.QUIZ_SET} component={QuizSettingsContainer} />
        <Stack.Screen name={ScreenList.QUESTIONS_SET} component={QuestionsSettingsContainer} />
        <Stack.Screen name={ScreenList.MAIN_CREATION} component={MainCreation} />
      </Stack.Navigator>
    </ViewFlex>
  );
};
