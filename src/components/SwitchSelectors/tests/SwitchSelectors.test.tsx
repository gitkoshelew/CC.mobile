import {fireEvent, render} from '@testing-library/react-native';
import {SwitchSelectors} from '../index';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import store from '@src/bll/store/store';
import {Provider} from 'react-redux';
import i18n from '../../../../i18n';
import {I18nextProvider} from 'react-i18next';

test('Should render switchSelectors list', async () => {
  const {getByText, toJSON} = render(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <SwitchSelectors type={TypeSwitchSelect.LEVEL} />
      </Provider>
    </I18nextProvider>,
  );
  const text = getByText(i18n.getResource('en', 'SwitchSelectors', 'level.0'));
  fireEvent.changeText(text);
  expect(toJSON()).toMatchSnapshot();
});
