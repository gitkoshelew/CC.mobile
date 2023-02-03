import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CreateTest} from '@src/screens/CreateTest/CreateTest';
import {LiveCoding} from '@src/screens/LiveCoding';
import {TabButton} from './TabButton/TabButton';
import Tests from '@src/screens/Testing/Tests';
import {Home} from '@src/screens/Main/Home';
import {StyleSheet, View} from 'react-native';
import {DraggableBottomSheet} from '@src/components/DraggableBottomSheet';

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
  TEST_RESULT = 'Test result',
  MAIN = 'Main',
  SIGN_IN = 'Sign in',
  SIGN_UP = 'Sign up',
}

const Navigation = () => {
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
                <TabButton {...props} name={route.name} size={30} />
                {route.name === 'Home' && <DraggableBottomSheet />}
              </>
            ),
            tabBarShowLabel: true,
            ...screenOptions,
          })}>
          <Tab.Screen name={ScreenList.HOME} component={Home} options={{headerShown: false}} />
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
