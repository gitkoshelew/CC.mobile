type IPogressResult = {
  type: string;
  answer: string[];
  correctAnswer: string[]; //currentTest[0].content.correctAnswer
  // answerLength: number; //answer.length
};
export const progressResult = ({
  type,
  answer,
  //answerLength,
  correctAnswer,
}: IPogressResult) => {
  switch (type) {
    case 'single': {
      if (answer.join().toLowerCase() === correctAnswer.join().toLowerCase()) {
        return 'right';
      } else if (
        answer.length > 0 &&
        answer.join().toLowerCase() !== correctAnswer.join().toLowerCase()
      ) {
        return 'error';
      } else if (answer.length === 0) {
        return 'default';
      }
      break;
    }
    case 'multi': {
      if (
        [...answer].sort().join('').toLowerCase() ===
        [...correctAnswer].sort().join('').toLowerCase()
      ) {
        return 'right';
      } else if (
        answer.length > 0 &&
        answer.sort().join('').toLowerCase() !==
          [...correctAnswer].sort().join('').toLowerCase()
      ) {
        return 'error';
      } else if (answer.length === 0) {
        return 'default';
      }
      break;
    }
    default:
      return 'active';
  }
};
