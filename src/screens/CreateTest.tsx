import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {TimerInput} from '../components/TimerInput';

export const CreateTest = () => {
  return (
    <SafeAreaView>
      <Text>Create test</Text>
      <TimerInput />
    </SafeAreaView>
  );
};
