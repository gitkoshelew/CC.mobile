import {newQuestionInQuizType} from '@customTypes/quiz-types';
import {transformTime} from '@src/utils/transformTime';
import {transformFormatOptions} from '@src/utils/transformFormatOptions';
import {CreateQuestionValuesType} from '@src/screens/CreateQuiz/components/CreateQuestion/CreateQuestionContainer';

export function transformTimeSerializer(
  props: CreateQuestionValuesType,
): newQuestionInQuizType {
  const {correctAnswers, minutes, seconds, options, ...rest} = props;
  const transformOptions = transformFormatOptions(options);
  const time = transformTime({
    format: 'onlySeconds',
    minutes,
    seconds,
  });

  return {
    ...rest,
    content: {options: transformOptions as string[], correctAnswer: correctAnswers},
    timer: time as number,
  };
}
