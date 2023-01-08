import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {NavigationProp, NavigatorScreenParams} from '@react-navigation/native';
import {ScreenList} from '../navigation/navigation';

export type RootCreateTestParamsList = {
  [ScreenList.QUESTIONS_SET]: undefined;
  [ScreenList.TEST_SET]: undefined;
};

export type RootHomeScreenParamsList = {
  [ScreenList.MAIN]: undefined;
  [ScreenList.SIGN_IN]: undefined;
};

export type RootStackParamList = {
  [ScreenList.HOME]: NavigatorScreenParams<RootHomeScreenParamsList>;
  [ScreenList.CREATE_TEST]: NavigatorScreenParams<RootCreateTestParamsList>;
  [ScreenList.TESTS_LIST]: undefined;
  [ScreenList.LIVE_CODING]: undefined;
};

export type NavigationType = NativeStackNavigationProp<RootStackParamList>;
export type NavigationUseType = NavigationProp<RootStackParamList>;
