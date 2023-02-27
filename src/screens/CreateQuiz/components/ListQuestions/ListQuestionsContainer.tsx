import {useEffect, useState} from 'react';
import {ListQuestions} from '@src/screens/CreateQuiz/components/ListQuestions/ListQuestions';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers';
import {useAppDispatch} from '@hooks/hooks';
import {
  addQuestionToQuiz,
  getQuestions,
  getTopics,
} from '@src/screens/CreateQuiz/services/services';
import {
  Difficulty,
  questionResponseType,
  questionType,
  TypeOptions,
} from '@customTypes/quiz-types';
import {TopicType} from '@customTypes/quizzesAPI-types';
import {getQuizQuestions} from '@src/bll/quizReducer';

export const initialQuestion = {
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
};

type ListQuestionsContainerPropsType = {
  quizId: number;
  changeQuestions: (value: questionType[]) => void;
  currentQuestionIndex: number;
  currentQuizQuestions: questionType[];
  changeCurrentQuestionIndex: (value: number) => void;
};

export const ListQuestionsContainer = ({
  quizId,
  changeQuestions,
  currentQuestionIndex,
  currentQuizQuestions,
  changeCurrentQuestionIndex,
}: ListQuestionsContainerPropsType) => {
  const dispatch = useAppDispatch();
  const [topics, setTopics] = useState(['all']);
  const [questions, setQuestions] = useState<questionResponseType[]>([initialQuestion]);

  const handleAddQuestion = async (questionId: number) => {
    await dispatch(addQuestionToQuiz({quizId, questionId}));
    const updatedQuestions = await dispatch(getQuizQuestions(quizId)).unwrap();
    changeQuestions(updatedQuestions.question);
    changeCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    dispatch(getQuestions())
      .unwrap()
      .then(res => {
        setQuestions(res);
      });
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTopics())
      .unwrap()
      .then(res => {
        setTopics(['All', ...res.map((el: TopicType) => el.title)]);
      });
  }, [dispatch]);

  return (
    <ViewFlex>
      <ListQuestions
        topics={topics}
        quizId={quizId}
        questions={questions}
        currentQuizQuestions={currentQuizQuestions}
        onPressAddQuestion={handleAddQuestion}
      />
    </ViewFlex>
  );
};
