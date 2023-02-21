import {StyleSheet, Text, View} from 'react-native';
import {Control, Controller} from 'react-hook-form';
import {CreateQuestionFieldType} from '@src/screens/CreateQuiz/components/CreateQuestion/CreateQuestion';
import {TextError} from '@src/components/ui/ReadyStyles/TextError';
import {PickerItem} from '@src/components/TimePicker/PickerItem/index';

type TimePickerPropsType = {
  control: Control<CreateQuestionFieldType>;
  errors: string | undefined;
};

export const TimePicker = ({control, errors}: TimePickerPropsType) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.inner}>
          <Text style={styles.text}>Min.</Text>
          <Controller
            control={control}
            name="minutes"
            render={({field: {onChange, value}}) => (
              <PickerItem type="minutes" value={value} onChange={onChange} />
            )}
          />
        </View>
        <View style={styles.inner}>
          <Text style={styles.text}>Sec.</Text>
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

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Regular',
  },
});
