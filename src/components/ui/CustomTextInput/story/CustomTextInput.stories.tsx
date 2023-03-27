import {storiesOf} from '@storybook/react-native';
import {CustomTextInput} from '../index';
import {Platform} from 'react-native';

storiesOf('Custom input', module)
  .add('default', () => <CustomTextInput onChangeText={() => {}} />)
  .add('large', () => (
    <CustomTextInput
      onChangeText={() => {}}
      numberOfLines={Platform.OS === 'ios' ? undefined : 4}
      height={Platform.OS === 'ios' ? '100px' : undefined}
    />
  ));
