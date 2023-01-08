import {View} from 'react-native';
import {
  ButtonAnswerBox,
  TextBox,
} from '../../../components/ui/ReadyStyles/Boxes/index';
import {AddingAnswer} from '../../../components/AddingAnswer/index';
import {AddButton} from '../../../components/ui/AddButton/index';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import {
  addAnswer,
  deleteAnswer,
  correctAnswer,
} from '../../../bll/createTestReducer';

export const CreateAnswer = () => {
  const dispatch = useAppDispatch();
  const answers = useAppSelector(state => state.createTest.content);

  const addNewAnswerHandler = () => {
    dispatch(addAnswer());
  };

  const deleteAnswerHandler = (id: number) => {
    dispatch(deleteAnswer({id}));
  };

  const checkedCorrectAnswer = (id: number, isCorrect: boolean) => {
    dispatch(correctAnswer({id, isCorrect}));
  };

  const disabledDeleteBtn = answers.length === 2;

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
