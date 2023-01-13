import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CreateTest} from '../screens/CreateTest/CreateTest';
import {LiveCoding} from '../screens/LiveCoding';
import {TabButton} from './TabButton/TabButton';
import Tests from '../screens/Testing/Tests';
import {Home} from '../screens/Main/Home';

const Tab = createBottomTabNavigator();

export enum ScreenList {
  HOME = 'Home',
  CREATE_TEST = 'Create test',
  TESTS = 'Tests',
  TESTS_LIST = 'Tests list',
  LIVE_CODING = 'Live coding',
  QUESTIONS_SET = 'Questions settings',
  TEST_SET = 'Test settings',
  TEST_PROCESS = 'Test process',
  MAIN = 'Main',
  SIGN_IN = 'Sign in',
  SIGN_UP = 'Sign up',
}

const Navigation = () => {
  const screenOptions = {
    unmountOnBlur: false,
    tabBarStyle: {
      height: 90,
      paddingTop: 10,
      paddingBottom: 35,
      paddingHorizontal: 10,
    },
  };

  return (
    <Tab.Navigator
      initialRouteName={'home'}
      screenOptions={({route}) => ({
        tabBarButton: (props: BottomTabBarButtonProps) => (
          <TabButton {...props} name={route.name} size={30} />
        ),
        tabBarShowLabel: true,
        ...screenOptions,
      })}>
      <Tab.Screen
        name={ScreenList.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ScreenList.CREATE_TEST}
        component={CreateTest}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ScreenList.TESTS}
        component={Tests}
        options={{headerShown: false}}
      />
      <Tab.Screen name={ScreenList.LIVE_CODING} component={LiveCoding} />
    </Tab.Navigator>
  );
};

export default Navigation;
