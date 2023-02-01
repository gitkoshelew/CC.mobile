import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomTextInput} from '@src/components/ui/CustomTextInput/index';
import {AppButton} from '@src/components/ui/AppButton/index';
import {useAppDispatch} from '@hooks/hooks';
import {login} from '@src/bll/authReducer';

export const Main = () => {
  const dispatch = useAppDispatch();

  const onPressLogin = () => {
    dispatch(login());
  };

  return (
    <SafeAreaView style={styles.box}>
      <View style={styles.inputBox}>
        <CustomTextInput onChangeText={() => {}} value={'Hello world'} />
      </View>
      <TouchableOpacity>
        <AppButton title="login" type="primary" onPress={onPressLogin} />
      </TouchableOpacity>
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
