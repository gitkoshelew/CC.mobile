import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {NavigationProp, NavigatorScreenParams} from '@react-navigation/native';
import {ScreenList} from '../navigation/navigation';

export type RootCreateTestParamsList = {
  [ScreenList.QUESTIONS_SET]: {
    numberQuestions: number;
    idNewTest: number;
  };
  [ScreenList.TEST_SET]: undefined;
};

export type RootTestingParamsList = {
  [ScreenList.TESTS_LIST]: undefined;
  [ScreenList.TEST_PROCESS]: undefined;
  [ScreenList.TEST_RESULT]: undefined;
};

export type RootHomeScreenParamsList = {
  [ScreenList.MAIN]: undefined;
  [ScreenList.SIGN_IN]: undefined;
  [ScreenList.SIGN_UP]: undefined;
};

export type RootStackParamList = {
  [ScreenList.HOME]: NavigatorScreenParams<RootHomeScreenParamsList>;
  [ScreenList.CREATE_TEST]: NavigatorScreenParams<RootCreateTestParamsList>;
  [ScreenList.TESTS]: NavigatorScreenParams<RootTestingParamsList>;
  [ScreenList.LIVE_CODING]: undefined;
};

export type NavigationType = NativeStackNavigationProp<RootStackParamList>;
export type NavigationUseType = NavigationProp<RootStackParamList>;
