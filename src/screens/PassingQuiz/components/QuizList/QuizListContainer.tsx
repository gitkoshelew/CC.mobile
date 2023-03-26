import {memo, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {getQuizzes} from '@src/bll/quizReducer';
import {getTopics} from '@src/screens/CreateQuiz/services/services';
import {getQuizResponseType, TopicType} from '@customTypes/quizzesAPI-types';
import {ScreenLayout} from '@src/layout/ScreenLayout/index';
import {QuizList} from '@src/screens/PassingQuiz/components/QuizList/QuizList';

type QuizListPropsType = {
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
  onPressStartTesting: (id: number) => void;
};

export const QuizListContainer = memo(
  ({onPressStartTesting, isModalVisible, setIsModalVisible}: QuizListPropsType) => {
    const dispatch = useAppDispatch();
    const isFetching = useAppSelector(state => state.app.isFetching);
    const [quizzesData, setQuizzesData] = useState<getQuizResponseType[]>([]);
    const [topics, setTopics] = useState<string[]>(['all']);

    useEffect(() => {
      dispatch(getQuizzes())
        .unwrap()
        .then(res => {
          setQuizzesData(res);
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
      <ScreenLayout isFetching={isFetching}>
        <QuizList
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          onPressStartTesting={onPressStartTesting}
          quizzesData={quizzesData}
          topics={topics}
        />
      </ScreenLayout>
    );
  },
);
