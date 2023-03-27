import {act, fireEvent, render, screen} from '@testing-library/react-native';
import {AnswersOptions} from '@src/components/AnswersOptions';
import {AnswersOptionsProps} from '@src/components/AnswersOptions/tests/functional.test';
import {Provider} from 'react-redux';
import store from '@src/bll/store/store';
import React from 'react';

test('Should render AnswersOptions and selected radio button', () => {
  const answersOptions = render(
    <Provider store={store}>
      render(
      <AnswersOptions {...AnswersOptionsProps} />
      );
    </Provider>,
  );

  expect(answersOptions).toMatchSnapshot();

  act(() => {
    fireEvent.press(screen.getByText('one'));
  });

  expect(answersOptions).toMatchSnapshot();
});
