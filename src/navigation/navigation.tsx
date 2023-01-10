import {Home} from '../screens/Home';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CreateTest} from '../screens/CreateTest/CreateTest';
import {TestsList} from '../screens/TestsList/TestsList';
import {LiveCoding} from '../screens/LiveCoding';
import {TabButton} from './TabButton/TabButton';

const Tab = createBottomTabNavigator();

export enum ScreenList {
  HOME = 'Home',
  CREATE_TEST = 'Create test',
  TESTS_LIST = 'Tests list',
  LIVE_CODING = 'Live coding',
  QUESTIONS_SET = 'Questions settings',
  TEST_SET = 'Test settings',
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
      <Tab.Screen name={ScreenList.TESTS_LIST} component={TestsList} />
      <Tab.Screen name={ScreenList.LIVE_CODING} component={LiveCoding} />
    </Tab.Navigator>
  );
};

export default Navigation;
