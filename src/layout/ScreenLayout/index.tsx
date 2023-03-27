import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Loader} from '@src/components/ui/Loader/index';
import {ThemeContext} from 'styled-components/native';
import {DefaultTheme} from 'styled-components';

type ScreenLayoutPropsType = {
  isFetching: boolean;
  children: React.ReactNode;
};

export const ScreenLayout = ({isFetching, children}: ScreenLayoutPropsType) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles(theme).container}>
      {children}
      {isFetching && <Loader />}
    </View>
  );
};

const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  container: {
    flex: 1,
    backgroundColor: theme?.layout,
  },
}));
