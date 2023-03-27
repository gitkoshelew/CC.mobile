import {Colon, Container} from './styles';
import {InputsFieldType} from '@src/screens/CreateQuiz/CreateQuestion';
import {View} from 'react-native';
import {TextInputHookForm} from '@src/components/TextInputHookForm';
import {Control} from 'react-hook-form';

type TimerInputPropsType = {
  control: Control<InputsFieldType>;
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
