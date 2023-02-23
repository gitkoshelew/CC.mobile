import {useRef} from 'react';
import {
  CreateQuestion,
  CreateQuestionFieldType,
} from '@src/screens/CreateQuiz/components/CreateQuestion/CreateQuestion';
import {ScrollView} from 'react-native';
import {questionType} from '@customTypes/quiz-types';
import {transformFormatOptions} from '@src/utils/transformFormatOptions';
import {createQuestion} from '@src/screens/CreateQuiz/services/services';
import {getQuizQuestions} from '@src/bll/quizReducer';
import {useAppDispatch} from '@hooks/hooks';
import {transformTimeSerializer} from '@src/screens/CreateQuiz/serializer/index';

export type CreateQuestionPropsType = {
  quizId: number;
  changeQuestions: (value: questionType[]) => void;
  currentQuestion: questionType;
  numberOfQuestions: number;
  currentQuestionIndex: number;
  onPressCurrentQuestionPressed: (value: number) => void;
};

export type SaveQuestionValuesType = {
  valuesFields: CreateQuestionFieldType;
  correctAnswers: string[];
};

export const CreateQuestionContainer = (props: CreateQuestionPropsType) => {
  const {
    quizId,
    changeQuestions,
    currentQuestion,
    numberOfQuestions,
    currentQuestionIndex,
    onPressCurrentQuestionPressed,
  } = props;
  const dispatch = useAppDispatch();
  const scrollRef = useRef(null);

  const handlerSaveQuestion = async (values: SaveQuestionValuesType) => {
    const {valuesFields, correctAnswers} = values;
    const {options, ...restValuesFields} = valuesFields;
    const changedOptions = transformFormatOptions(options);
    const newQuestion = {
      ...restValuesFields,
      content: {options: changedOptions as string[], correctAnswer: correctAnswers},
      quizId,
    };
    await dispatch(
      createQuestion(transformTimeSerializer({newQuestion, format: 'onlySeconds'})),
    );
    const questions = await dispatch(getQuizQuestions(quizId)).unwrap();
    changeQuestions(questions.question);
  };

  return (
    <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
      <CreateQuestion
        scrollRef={scrollRef}
        currentQuestion={currentQuestion}
        numberOfQuestions={numberOfQuestions}
        onSaveQuestion={handlerSaveQuestion}
        currentQuestionIndex={currentQuestionIndex}
        onPressCurrentQuestionPressed={onPressCurrentQuestionPressed}
      />
    </ScrollView>
  );
};
