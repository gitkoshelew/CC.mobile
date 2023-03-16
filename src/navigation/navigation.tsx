import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {TabButton} from './TabButton/TabButton';
import {Quizzes} from '@src/screens/PassingQuiz';
import {Home} from '@src/screens/Main';
import {StyleSheet, View} from 'react-native';
import {DraggableBottomSheet} from '@src/components/DraggableBottomSheet';
import {Cards} from '@src/screens/Cards';
import {CreateTest} from '@src/screens/CreateQuiz';
import {useAppSelector} from '@hooks/hooks';

const Tab = createBottomTabNavigator();

export enum ScreenList {
  HOME = 'Home',
  CREATE_QUIZ = 'Create quiz',
  CREATE_QUESTION = 'Create question',
  LIST_QUESTIONS = 'List questions',
  QUIZZES = 'Quizzes',
  QUIZZES_LIST = 'Tests list',
  QUESTIONS_SET = 'Questions settings',
  QUIZ_SET = 'Quiz settings',
  QUIZ_PROCESS = 'Quiz process',
  QUIZ_RESULT = 'Quiz result',
  CARDS = 'Cards',
  CARDS_LIST = 'Cards list',
  MAIN = 'Main',
  SIGN_IN = 'Sign in',
  SIGN_UP = 'Sign up',
}

const Navigation = () => {
  const isFetching = useAppSelector(state => state.app.isFetching);
  const screenOptions = {
    unmountOnBlur: false,
    tabBarStyle: {
      height: 70,
      paddingBottom: 30,
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBox}>
        <Tab.Navigator
          initialRouteName={'home'}
          screenOptions={({route}) => ({
            tabBarButton: (props: BottomTabBarButtonProps) => (
              <>
                <TabButton {...props} name={route.name} size={30} disabled={isFetching} />
                {route.name === 'Home' && <DraggableBottomSheet />}
              </>
            ),
            ...screenOptions,
          })}>
          <Tab.Screen name={ScreenList.HOME} component={Home} options={{headerShown: false}} />
          <Tab.Screen
            name={ScreenList.CREATE_QUIZ}
            component={CreateTest}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name={ScreenList.QUIZZES}
            component={Quizzes}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name={ScreenList.CARDS}
            component={Cards}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    flex: 1,
  },
  tabBox: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
