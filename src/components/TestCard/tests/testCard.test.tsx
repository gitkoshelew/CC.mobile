import {fireEvent, render} from '@testing-library/react-native';
import {TestCard} from '@src/components/TestCard';

test('Should render testCard list', async () => {
  const {getByText, toJSON} = render(
    <TestCard onPress={() => {}} id={1} title={'Star'} questions={1} topic="JS" />,
  );
  const button = getByText('Start');
  fireEvent.press(button);
  expect(toJSON()).toMatchSnapshot();
});
