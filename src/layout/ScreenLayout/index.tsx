import React from 'react';
import {View} from 'react-native';
import {Loader} from '@src/components/ui/Loader/index';

type ScreenLayoutPropsType = {
  isFetching: boolean;
  children: React.ReactNode;
};

export const ScreenLayout = ({isFetching, children}: ScreenLayoutPropsType) => {
  return (
    <View>
      {isFetching && <Loader />}
      {children}
    </View>
  );
};
