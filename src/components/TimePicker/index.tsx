import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Control, Controller} from 'react-hook-form';
import {CreateQuestionFieldType} from '@src/screens/CreateQuiz/components/CreateQuestion/CreateQuestion';
import {TextError} from '@src/components/ui/ReadyStyles/TextError';
import {PickerItem} from '@src/components/TimePicker/PickerItem/index';
import {DefaultTheme} from 'styled-components';
import {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';

type TimePickerPropsType = {
  control: Control<CreateQuestionFieldType>;
  errors: string | undefined;
};

export const TimePicker = ({control, errors}: TimePickerPropsType) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles().wrapper}>
      <View style={styles().container}>
        <View style={styles().inner}>
          <Text style={styles(theme).text}>Min.</Text>
          <Controller
            control={control}
            name="minutes"
            render={({field: {onChange, value}}) => (
              <PickerItem type="minutes" value={value} onChange={onChange} />
            )}
          />
        </View>
        <View style={styles().inner}>
          <Text style={styles(theme).text}>Sec.</Text>
          <Controller
            control={control}
            name="seconds"
            render={({field: {onChange, value}}) => (
              <PickerItem type="seconds" value={value} onChange={onChange} />
            )}
          />
        </View>
      </View>
      {errors && <TextError>{errors}</TextError>}
    </View>
  );
};

const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  wrapper: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
  } as ViewStyle,
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  text: {
    marginBottom: 3,
    fontFamily: 'Montserrat-Regular',
    color: theme?.textMainColor,
  } as ViewStyle,
}));
