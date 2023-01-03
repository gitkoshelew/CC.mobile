import {storiesOf} from '@storybook/react-native';
import {AppButton} from '../index';

storiesOf('UI', module).add('AppButton', () => (
  <>
    <AppButton type="primary" title="Start" />
    <AppButton title="Close" type="secondary" />
  </>
));
