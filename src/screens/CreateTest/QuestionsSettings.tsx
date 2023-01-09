import {QuestionsTabs} from '../../components/QuestionsTabs/index';
import {ViewContainer} from '../../components/ui/ReadyStyles/Containers/index';
import {ScrollView} from 'react-native';

import {CreateQuestion} from './CreateQuestion/index';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {selectCurrentQuestion} from '../../bll/testReducer';
import {useCallback, useEffect, useState} from 'react';

export const QuestionsSettings = () => {
  const idCurrentQuestion = useAppSelector(
    state => state.createTest.test.questions[0].id,
  );
  const [idQuestion, setIdQuestion] = useState<number>(idCurrentQuestion);
  const dispatch = useAppDispatch();

  const onPressCurrentQuestionHandler = useCallback(
    (id: number) => {
      setIdQuestion(id);
      dispatch(selectCurrentQuestion({id}));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(selectCurrentQuestion({id: idCurrentQuestion}));
  }, [dispatch, idCurrentQuestion]);

  return (
    <ViewContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <QuestionsTabs onPressCurrentQuestion={onPressCurrentQuestionHandler} />
        <CreateQuestion id={idQuestion} />
      </ScrollView>
    </ViewContainer>
  );
};
