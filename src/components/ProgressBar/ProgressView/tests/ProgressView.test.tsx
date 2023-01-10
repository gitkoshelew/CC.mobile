import {render} from '@testing-library/react-native';
import {ProgressView, ProgressType} from '../index';

const createTestProps = {
  id: '1',
  questionStatus: 'default',
} as ProgressType;

describe('ProgressView component ui', () => {
  it('ProgressView renders', () => {
    render(<ProgressView {...createTestProps} />);
  });
});
