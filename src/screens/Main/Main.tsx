import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomTextInput} from '@src/components/ui/CustomTextInput/index';
import {AppButton} from '@src/components/ui/AppButton/index';
import {useAppDispatch} from '@hooks/hooks';
import {login, register} from '@src/bll/authReducer';
import {BlockBoxMarginRight} from '@src/components/ui/ReadyStyles/Boxes/index';
import {ViewFlexForTwoElements} from '@src/components/ui/ReadyStyles/Containers/index';

export const Main = () => {
  const dispatch = useAppDispatch();

  const onPressLogin = () => {
    dispatch(login());
  };
  const onPressRegister = () => {
    dispatch(register());
  };

  return (
    <SafeAreaView style={styles.box}>
      <View style={styles.inputBox}>
        <CustomTextInput onChangeText={() => {}} value={'Hello world'} />
      </View>
      <ViewFlexForTwoElements>
        <BlockBoxMarginRight>
          <TouchableOpacity>
            <AppButton title="login" type="primary" onPress={onPressLogin} />
          </TouchableOpacity>
        </BlockBoxMarginRight>
        <TouchableOpacity>
          <AppButton title="registration" type="primary" onPress={onPressRegister} />
        </TouchableOpacity>
      </ViewFlexForTwoElements>
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
