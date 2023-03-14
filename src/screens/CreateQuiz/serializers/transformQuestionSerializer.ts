import {DefaultTimeType, transformTime} from '@src/utils/transformTime';
import {questionType} from '@customTypes/quiz-types';
import {optionsType, transformFormatOptions} from '@src/utils/transformFormatOptions';

export const transformQuestionSerializer = (currentQuestion: questionType) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/naming-convention
  const {timer, id: _, Quiz_Question: __, moderationId: ___, ...rest} = currentQuestion;
  const newTime = transformTime({
    format: 'default',
    totalSeconds: timer,
  }) as DefaultTimeType;

  const options = transformFormatOptions(rest.content.options) as optionsType;
  return {...rest, ...newTime, content: {...rest.content, options}};
};
