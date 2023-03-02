import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenList} from '@src/navigation/navigation';
import {RootCreateQuizParamsList} from '@customTypes/navigation-types';
import {QuizSettingsContainer} from '@src/screens/CreateQuiz/components/QuizSettings/QuizSettingsContainer';
import {QuestionsSettingsContainer} from '@src/screens/CreateQuiz/components/QuestionsSettings/QuestionsSettingsContainer';
import {Platform, StyleSheet, View} from 'react-native';

const Stack = createNativeStackNavigator<RootCreateQuizParamsList>();

export const CreateTest = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name={ScreenList.QUIZ_SET} component={QuizSettingsContainer} />
        <Stack.Screen name={ScreenList.QUESTIONS_SET} component={QuestionsSettingsContainer} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : 60,
  },
});
