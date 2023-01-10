import {ViewCheck} from './styles';

export type ProgressType = {
  id: string;
  questionStatus: 'default' | 'active' | 'right' | 'error';
};

export const ProgressView = ({questionStatus}: ProgressType) => {
  return <ViewCheck questionStatus={questionStatus} />;
};
