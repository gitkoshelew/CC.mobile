import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '@src/components/Header/index';
import {CustomTextInput} from '@src/components/ui/CustomTextInput/index';

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
