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
  setCorrectAnswer,
} from '../../../../bll/testReducer';
import {useCallback} from 'react';
import {correctAnswerType} from 'types/test-types';

type CreateAnswerPropsType = {
  answers: string[];
  correctAnswer: correctAnswerType;
};

export const CreateAnswer = ({
  answers,
  correctAnswer,
}: CreateAnswerPropsType) => {
  const dispatch = useAppDispatch();

  const addNewAnswerHandler = useCallback(() => {
    dispatch(addAnswer());
  }, [dispatch]);

  const deleteAnswerHandler = useCallback(
    (index: number) => {
      dispatch(deleteAnswer({index}));
    },
    [dispatch],
  );

  const checkedCorrectAnswer = useCallback(
    (index: number, answer: string, checked: boolean) => {
      dispatch(setCorrectAnswer({index, answer, checked}));
    },
    [dispatch],
  );

  const disabledDeleteBtn = answers.length <= 2;
  return (
    <View>
      <TextBox>Answer choice</TextBox>
      {answers.map((item, index) => (
        <AddingAnswer
          key={index}
          index={index}
          item={item}
          correctAnswer={correctAnswer}
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
