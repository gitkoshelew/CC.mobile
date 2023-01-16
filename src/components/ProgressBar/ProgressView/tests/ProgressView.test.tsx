import {render} from '@testing-library/react-native';
import {ProgressView, ProgressType} from '../index';

const createTestProps = {
  id: 1,
  questionStatus: 'default',
} as ProgressType;

describe(' Should render ProgressView component ', () => {
  it('ProgressView renders', () => {
    render(<ProgressView {...createTestProps} />);
  });
});
