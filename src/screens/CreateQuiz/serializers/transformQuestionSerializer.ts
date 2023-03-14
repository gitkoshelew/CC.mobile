import {DefaultTimeType, transformTime} from '@src/utils/transformTime';
import {questionType} from '@customTypes/quiz-types';
import {optionsType, transformFormatOptions} from '@src/utils/transformFormatOptions';
import {omitObjectProperties} from '@src/utils/omitObjectProperties';

export const transformQuestionSerializer = (currentQuestion: questionType) => {
  const {timer, ...rest} = omitObjectProperties(
    currentQuestion,
    'id',
    'Quiz_Question',
    'moderationId',
  ) as questionType;

  const newTime = transformTime({
    format: 'default',
    totalSeconds: timer,
  }) as DefaultTimeType;

  const options = transformFormatOptions(rest.content.options) as optionsType;
  return {...rest, ...newTime, content: {...rest.content, options}};
};
