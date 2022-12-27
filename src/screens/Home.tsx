import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationType} from '../types/navigation-types';
import {ScreenList} from '../navigation/navigation';
import {Header} from '../components/Header';
import {TestCard} from '../components/TestCard';
import {Sort} from '../components/Sort';
import {Tabs} from '../components/Tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SuperTextInput} from '../components/ui/SuperTextInput';

interface IHomeScreen {
  navigation: NavigationType;
}
export const Home: FC<IHomeScreen> = ({navigation}) => {
  const [value, setValue] = useState('');
  console.log(value);
  const handlerNavigationExample = () => {
    navigation.push(ScreenList.EXAMPLE);
  };
  return (
    <SafeAreaView style={styles.box}>
      <Header />
      <Tabs />
      <Sort />
      <View style={styles.inputBox}>
        <SuperTextInput onChangeText={setValue} value={value} />
      </View>
      <TestCard onPress={handlerNavigationExample} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 130,
  },
});
