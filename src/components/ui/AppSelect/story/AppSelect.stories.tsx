import {storiesOf} from '@storybook/react-native';
import {AppSelect} from '../index';
const data = ['Verify', 'Date', 'Popularity', 'Something else'];
storiesOf('UI', module).add('AppSelect', () => (
  <>
    <AppSelect type="primary" size="m" data={data} />
    <AppSelect type="secondary" size="s" data={data} />
  </>
));
