import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {NavigationProp, NavigatorScreenParams} from '@react-navigation/native';
import {ScreenList} from '../navigation/navigation';

export type RootCreateQuizParamsList = {
  [ScreenList.QUESTIONS_SET]: {
    numberOfQuestions: number;
    idNewQuiz: number;
    topicId: number;
  };
  [ScreenList.QUIZ_SET]: undefined;
};

export type RootTestingParamsList = {
  [ScreenList.QUIZZES_LIST]: undefined;
  [ScreenList.QUIZ_PROCESS]: undefined;
  [ScreenList.QUIZ_RESULT]: undefined;
};

export type RootHomeScreenParamsList = {
  [ScreenList.MAIN]: undefined;
  [ScreenList.SIGN_IN]: undefined;
  [ScreenList.SIGN_UP]: undefined;
};

export type RootCardsScreenParamsList = {
  [ScreenList.CARDS_LIST]: undefined;
};

export type RootStackParamList = {
  [ScreenList.HOME]: NavigatorScreenParams<RootHomeScreenParamsList>;
  [ScreenList.CREATE_QUIZ]: NavigatorScreenParams<RootCreateQuizParamsList>;
  [ScreenList.QUIZZES]: NavigatorScreenParams<RootTestingParamsList>;
  [ScreenList.CARDS]: NavigatorScreenParams<RootCardsScreenParamsList>;
};

export type NavigationType = NativeStackNavigationProp<RootStackParamList>;
export type NavigationUseType = NavigationProp<RootStackParamList>;
