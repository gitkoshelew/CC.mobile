import {StyleSheet, View} from 'react-native';
import {Header} from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomTextInput} from '../components/ui/CustomTextInput';
import {DraggableBottomSheet} from '../components/DraggableBottomSheet/index';

export const Home = () => {
  return (
    <SafeAreaView style={styles.box}>
      <Header />
      <View style={styles.inputBox}>
        <CustomTextInput onChangeText={() => {}} value={'Hello world'} />
      </View>
      <DraggableBottomSheet />
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
