import {StyleSheet, View} from 'react-native';
import {Header} from '../components/Header';
import {TestCard} from '../components/TestCard';
import {Sort} from '../components/Sort';
import {Tabs} from '../components/Tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomTextInput} from '../components/ui/CustomTextInput';
import {SwitchSelectors} from '../components/SwitchSelector';

export const Home = () => {
  return (
    <SafeAreaView style={styles.box}>
      <Header />
      <Tabs />
      <Sort />
      <TestCard onPress={() => {}} />
      <View style={styles.inputBox}>
        <CustomTextInput onChangeText={() => {}} value={'Hello world'} />
      </View>
      <SwitchSelectors type="level" />
      <SwitchSelectors type="number" />
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
    marginBottom: 20,
  },
});
