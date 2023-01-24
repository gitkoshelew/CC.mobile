import {storiesOf} from '@storybook/react-native';
import {AnswersOptions} from '@src/components/AnswersOptions/index';

storiesOf('Answers options', module)
  .add('default', () => <AnswersOptions onPress={() => {}} data={['one']} />)
  .add('active', () => <AnswersOptions onPress={() => {}} selected={0} data={['one']} />);
