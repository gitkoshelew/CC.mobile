import {StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Home = () => {
  return (
    <SafeAreaView style={styles.box}>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
