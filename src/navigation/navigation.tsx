import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {Example} from '../screens/Example';

const {Navigator, Screen} = createNativeStackNavigator();

export enum ScreenList {
  HOME = 'home',
  EXAMPLE = 'example',
}

export type RootStackParamList = {
  [ScreenList.HOME]: undefined; // undefined because you aren't passing any params to the home screen
  [ScreenList.EXAMPLE]: undefined;
};

const Navigation = () => {
  return (
    <Navigator initialRouteName={'home'}>
      <Screen name={ScreenList.HOME} component={Home} />
      <Screen name={ScreenList.EXAMPLE} component={Example} />
    </Navigator>
  );
};

export default Navigation;
