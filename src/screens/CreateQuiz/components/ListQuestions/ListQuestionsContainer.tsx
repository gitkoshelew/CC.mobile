import {useEffect, useState} from 'react';
import {ListQuestions} from '@src/screens/CreateQuiz/components/ListQuestions/ListQuestions';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers/index';
import {useAppDispatch} from '@hooks/hooks';
import {getQuestions} from '@src/screens/CreateQuiz/services/services';
import {Difficulty, questionResponseType, TypeOptions} from '@customTypes/quiz-types';

export const ListQuestionsContainer = () => {
  const dispatch = useAppDispatch();
  const [questions, setQuestions] = useState<questionResponseType[]>([
    {
      id: 1,
      title: '',
      description: '',
      content: {
        options: ['', ''],
        correctAnswer: [],
      },
      difficulty: Difficulty.Easy,
      timer: 0,
      type: TypeOptions.single,
      topicId: 0,
      topic: {
        id: 0,
        title: '',
      },
      moderationId: null,
      quiz: [],
    },
  ]);

  useEffect(() => {
    dispatch(getQuestions())
      .unwrap()
      .then(res => {
        setQuestions(res);
      });
  }, [dispatch]);

  return (
    <ViewFlex>
      <ListQuestions questions={questions} />
    </ViewFlex>
  );
};
