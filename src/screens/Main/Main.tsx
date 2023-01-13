import {StyleSheet, View} from 'react-native';
import {Header} from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomTextInput} from '../components/ui/CustomTextInput';

export const Main = () => {
  return (
    <SafeAreaView style={styles.box}>
      <Header />
      <View style={styles.inputBox}>
        <CustomTextInput onChangeText={() => {}} value={'Hello world'} />
      </View>
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
