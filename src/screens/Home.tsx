import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationType} from '../types/navigation-types';
import {ScreenList} from '../navigation/navigation';
import {Header} from '../components/Header';
import {TestCard} from '../components/TestCard';
import {Sort} from '../components/Sort';
import {Tabs} from '../components/Tabs';

interface IHomeScreen {
  navigation: NavigationType;
}
export const Home: FC<IHomeScreen> = ({navigation}) => {
  const goButtonText = 'Go to example page...';
  const handlerNavigationExample = () => {
    navigation.push(ScreenList.EXAMPLE);
  };
  return (
    <View style={styles.box}>
      <Header />
      <Text>Hello world</Text>
      <Button
        accessibilityLabel={'navigationButton'}
        title={goButtonText}
        onPress={handlerNavigationExample}
      />
      <Tabs />
      <Sort />
      <TestCard />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
