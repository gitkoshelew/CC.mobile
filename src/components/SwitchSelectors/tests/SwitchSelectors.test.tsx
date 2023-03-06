import {fireEvent, render} from '@testing-library/react-native';
import {SwitchSelectors} from '../index';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import store from '@src/bll/store/store';
import {Provider} from 'react-redux';

test('Should render switchSelectors list', async () => {
  const {getByText, toJSON} = render(
    <Provider store={store}>
      <SwitchSelectors type={TypeSwitchSelect.LEVEL} />
    </Provider>,
  );
  const text = getByText('Easy');
  fireEvent.changeText(text);
  expect(toJSON()).toMatchSnapshot();
});
