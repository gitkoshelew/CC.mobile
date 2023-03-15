import {StyleSheet, View} from 'react-native';
import {DefaultTheme} from 'styled-components';

export const LazyLoadingLayout = (theme: DefaultTheme) => {
  return <View style={styles(theme).wrapper} />;
};

const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  wrapper: {
    flex: 1,
    backgroundColor: theme?.layout,
  },
}));
