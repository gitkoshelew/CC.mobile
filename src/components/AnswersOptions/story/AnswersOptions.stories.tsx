import {storiesOf} from '@storybook/react-native';
import {AnswersOptions} from '@src/components/AnswersOptions';

storiesOf('Answers options', module)
  .add('default', () => (
    <AnswersOptions onPress={() => {}} data={['one']} answerType="single" />
  ))
  .add('active', () => (
    <AnswersOptions onPress={() => {}} selected={0} data={['one']} answerType="single" />
  ));
