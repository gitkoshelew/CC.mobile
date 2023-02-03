type IPogressResult = {
  type: string;
  answer: string[];
  correctAnswer: string[];
};
export const progressResult = ({type, answer, correctAnswer}: IPogressResult) => {
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
