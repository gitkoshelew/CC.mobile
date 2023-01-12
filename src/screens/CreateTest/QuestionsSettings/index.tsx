import {QuestionsTabs} from '../../../components/QuestionsTabs/index';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {CreateQuestion} from '../CreateQuestion/index';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import {selectCurrentQuestion} from '../../../bll/testReducer';
import {useCallback, useEffect, useState} from 'react';
import {styles} from './styles';

export const QuestionsSettings = () => {
  const idCurrentQuestion = useAppSelector(
    state => state.testReducer.test.questions[0].id,
  );
  const [idQuestion, setIdQuestion] = useState<number>(idCurrentQuestion);
  const dispatch = useAppDispatch();
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0;

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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={styles.container}>
      <View style={styles.ViewContainer}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={styles.inner}>
            <QuestionsTabs
              onPressCurrentQuestion={onPressCurrentQuestionHandler}
            />
            <CreateQuestion id={idQuestion} />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
