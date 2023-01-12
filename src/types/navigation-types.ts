import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {NavigationProp, NavigatorScreenParams} from '@react-navigation/native';
import {ScreenList} from '../navigation/navigation';

export type RootCreateTestParamsList = {
  [ScreenList.QUESTIONS_SET]: undefined;
  [ScreenList.TEST_SET]: undefined;
};

export type RootTestingParamsList = {
  [ScreenList.TESTS_LIST]: undefined;
  [ScreenList.TEST_PROCESS]: undefined;
};

export type RootStackParamList = {
  [ScreenList.HOME]: undefined; // undefined because you aren't passing any params to the home screen
  [ScreenList.CREATE_TEST]: NavigatorScreenParams<RootCreateTestParamsList>;
  [ScreenList.TESTS]: NavigatorScreenParams<RootTestingParamsList>;
  [ScreenList.LIVE_CODING]: undefined;
};

export type NavigationType = NativeStackNavigationProp<RootStackParamList>;
export type NavigationUseType = NavigationProp<RootStackParamList>;
