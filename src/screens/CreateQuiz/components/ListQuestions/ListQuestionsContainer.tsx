import React from 'react';
import {ListQuestions} from '@src/screens/CreateQuiz/components/ListQuestions/ListQuestions';
import {ViewFlex} from '@src/components/ui/ReadyStyles/Containers/index';

export const ListQuestionsContainer = () => {
  return (
    <ViewFlex>
      <ListQuestions />
    </ViewFlex>
  );
};
