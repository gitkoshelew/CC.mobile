import {storiesOf} from '@storybook/react-native';
import {SwitchSelectors} from '../index';

storiesOf('SwitchSelectors', module).add('default', () => (
  <>
    <SwitchSelectors type="level" />
    <SwitchSelectors type="number" />
  </>
));
