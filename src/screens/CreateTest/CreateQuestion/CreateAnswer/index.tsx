import {View} from 'react-native';
import {
  ButtonAnswerBox,
  TextBox,
} from '../../../../components/ui/ReadyStyles/Boxes/index';
import {AddingAnswer} from '../../../../components/AddingAnswer/index';
import {AddButton} from '../../../../components/ui/AddButton/index';
import {useAppDispatch} from '../../../../hooks/hooks';
import {
  addAnswer,
  deleteAnswer,
  correctAnswer,
} from '../../../../bll/testReducer';
import {answerType} from 'types/test-types';
import {useCallback} from 'react';

type CreateAnswerPropsType = {
  answers: answerType[];
};

export const CreateAnswer = ({answers}: CreateAnswerPropsType) => {
  const dispatch = useAppDispatch();

  const addNewAnswerHandler = useCallback(() => {
    dispatch(addAnswer());
  }, [dispatch]);

  const deleteAnswerHandler = useCallback(
    (id: number) => {
      dispatch(deleteAnswer({id}));
    },
    [dispatch],
  );

  const checkedCorrectAnswer = useCallback(
    (id: number, isCorrect: boolean) => {
      dispatch(correctAnswer({id, isCorrect}));
    },
    [dispatch],
  );

  const disabledDeleteBtn = answers.length <= 2;
  return (
    <View>
      <TextBox>Answer choice</TextBox>
      {answers.map(item => (
        <AddingAnswer
          key={item.id}
          item={item}
          disabledDeleteBtn={disabledDeleteBtn}
          onPressDelete={deleteAnswerHandler}
          onPressCorrectAnswer={checkedCorrectAnswer}
        />
      ))}
      <ButtonAnswerBox>
        <AddButton
          onPress={addNewAnswerHandler}
          disabled={answers.length > 6}
        />
        <TextBox>Add answer</TextBox>
      </ButtonAnswerBox>
    </View>
  );
};
