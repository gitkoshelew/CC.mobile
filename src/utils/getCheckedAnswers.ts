import {IDataOptions} from '@src/components/AnswersOptions';

export const getCheckedAnswers = (checkedData: IDataOptions[]) => {
  return checkedData.filter(e => e.isChecked).map(e => e.label);
};
