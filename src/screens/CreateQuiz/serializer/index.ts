import {answersType, newQuestionInQuizType} from '@customTypes/quiz-types';
import {formatTimeType, transformTime} from '@src/utils/transformTime';

type NewQuestionType = {
  title: string;
  description: string;
  minutes: number;
  seconds: number;
  topicId: number;
  difficulty: string;
  type: string;
  content: answersType;
  quizId: number;
};

type transformTimeSerializerType = {
  newQuestion: NewQuestionType;
  format: formatTimeType;
};

export function transformTimeSerializer({
  newQuestion,
  format,
}: transformTimeSerializerType): newQuestionInQuizType {
  const {minutes, seconds, ...restValues} = newQuestion;
  const time = transformTime({
    format,
    minutes,
    seconds,
  });

  return {...restValues, timer: time as number};
}
