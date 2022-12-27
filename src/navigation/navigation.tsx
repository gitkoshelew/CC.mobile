import {Home} from '../screens/Home';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CreateTest} from '../screens/CreateTest';
import {TestsList} from '../screens/TestsList';
import {LiveCoding} from '../screens/LiveCoding';
import {getIcon} from '../utils/getIconNavigate';
import {TabButton} from './TabButton/TabButton';

const Tab = createBottomTabNavigator();

export enum ScreenList {
  HOME = 'Home',
  CREATE_TEST = 'Create test',
  TESTS_LIST = 'Tests list',
  LIVE_CODING = 'Live coding',
}

export type RootStackParamList = {
  [ScreenList.HOME]: undefined; // undefined because you aren't passing any params to the home screen
  [ScreenList.CREATE_TEST]: undefined;
  [ScreenList.TESTS_LIST]: undefined;
  [ScreenList.LIVE_CODING]: undefined;
};

const Navigation = () => {
  const screenOptions = {
    unmountOnBlur: false,
    tabBarStyle: {
      height: 85,
      paddingTop: 7,
      paddingBottom: 25,
    },
  };

  return (
    <Tab.Navigator
      initialRouteName={'home'}
      screenOptions={({route}) => ({
        tabBarIcon: ({size, focused}) => getIcon(route.name, focused, size),
        tabBarButton: (props: BottomTabBarButtonProps) => (
          <TabButton {...props} name={route.name} size={24} />
        ),
        tabBarShowLabel: true,
        ...screenOptions,
      })}>
      <Tab.Screen name={ScreenList.HOME} component={Home} />
      <Tab.Screen name={ScreenList.CREATE_TEST} component={CreateTest} />
      <Tab.Screen name={ScreenList.TESTS_LIST} component={TestsList} />
      <Tab.Screen name={ScreenList.LIVE_CODING} component={LiveCoding} />
    </Tab.Navigator>
  );
};

export default Navigation;
