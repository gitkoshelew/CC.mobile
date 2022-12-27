import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationType} from '../types/navigation-types';
import {ScreenList} from '../navigation/navigation';
import {Header} from '../components/Header';
import {TestCard} from '../components/TestCard';
import {Sort} from '../components/Sort';
import {Tabs} from '../components/Tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Timer} from '../components/Timer';

interface IHomeScreen {
  navigation: NavigationType;
}
export const Home: FC<IHomeScreen> = ({navigation}) => {
  const handlerNavigationExample = () => {
    navigation.push(ScreenList.EXAMPLE);
  };
  return (
    <SafeAreaView style={styles.box}>
      <Header />
      <Tabs />
      <Sort />
      <TestCard onPress={handlerNavigationExample} />
      <Timer time={12} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
