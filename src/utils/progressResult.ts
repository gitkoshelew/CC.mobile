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
      }
      if (answer.length === 0) {
        return 'default';
      }
      return 'error';
    }
    case 'multi': {
      if (
        [...answer].sort().join('').toLowerCase() ===
        [...correctAnswer].sort().join('').toLowerCase()
      ) {
        return 'right';
      }
      if (answer.length === 0) {
        return 'default';
      }
      return 'error';
    }
    default:
      return 'default';
  }
};
