import {render, screen} from '@testing-library/react-native';
import {QuestionsTabs} from '../index';

test('Should render view block', async () => {
  render(
    <QuestionsTabs
      onPressCurrentQuestion={() => {}}
      questions={[]}
      currentQuestionsId={1}
    />,
  );
  const scrollViewBlock = screen.getByTestId('ScrollViewBlock').props;

  expect(scrollViewBlock.horizontal).toBeTruthy();
  expect(scrollViewBlock.showsVerticalScrollIndicator).toBeFalsy();
  expect(scrollViewBlock.showsHorizontalScrollIndicator).toBeTruthy();
});
