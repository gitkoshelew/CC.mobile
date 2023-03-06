import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenList} from '@src/navigation/navigation';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers';
import {RootCreateQuizParamsList} from '@customTypes/navigation-types';
import {QuizSettingsContainer} from '@src/screens/CreateQuiz/components/QuizSettings/QuizSettingsContainer';
import {QuestionsSettingsContainer} from '@src/screens/CreateQuiz/components/QuestionsSettings/QuestionsSettingsContainer';
import {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import {styles} from '@src/components/ui/ReadyStyles/navigatorStyle';

const Stack = createNativeStackNavigator<RootCreateQuizParamsList>();

export const CreateTest = () => {
  const theme = useContext(ThemeContext);

  return (
    <ViewFlex>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles(theme).headerStyle,
          headerTitleStyle: styles(theme).headerTitleStyle,
        }}>
        <Stack.Screen name={ScreenList.QUIZ_SET} component={QuizSettingsContainer} />
        <Stack.Screen name={ScreenList.QUESTIONS_SET} component={QuestionsSettingsContainer} />
      </Stack.Navigator>
    </ViewFlex>
  );
};
