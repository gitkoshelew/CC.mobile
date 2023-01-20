import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomTextInput} from '@src/components/ui/CustomTextInput/index';

export const Main = () => {
  return (
    <SafeAreaView style={styles.box}>
      <View style={styles.inputBox}>
        <CustomTextInput onChangeText={() => {}} value={'Hello world'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    height: '100%',
    width: '100%',
  },
  inputBox: {
    width: 130,
    marginBottom: 20,
  },
});
