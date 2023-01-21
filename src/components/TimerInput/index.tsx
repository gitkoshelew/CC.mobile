import {Colon, Container} from './styles';
import {inputsFieldType} from '@src/screens/CreateTest/CreateQuestion/index';
import {View} from 'react-native';
import {TextInputHookForm} from '@src/components/TextInputHookForm/index';
import {Control} from 'react-hook-form';

type TimerInputPropsType = {
  control: Control<inputsFieldType>;
};

export const TimerInput = ({control}: TimerInputPropsType) => {
  return (
    <View>
      <Container>
        <TextInputHookForm
          control={control}
          name="minutes"
          typeInput="timer"
          placeholder="00"
          rules={{
            required: true,
          }}
        />
        <Colon>:</Colon>
        <TextInputHookForm
          control={control}
          name="seconds"
          typeInput="timer"
          placeholder="00"
          rules={{
            required: true,
          }}
        />
      </Container>
    </View>
  );
};
