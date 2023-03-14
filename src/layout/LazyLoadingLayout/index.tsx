import {StyleSheet, View} from 'react-native';
import {DefaultTheme} from 'styled-components';

type LazyLoadingLayoutPropsType = {
  theme?: DefaultTheme;
};

export const LazyLoadingLayout = ({theme}: LazyLoadingLayoutPropsType) => {
  return <View style={styles(theme).wrapper} />;
};

const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  wrapper: {
    flex: 1,
    backgroundColor: theme?.layout,
  },
}));
