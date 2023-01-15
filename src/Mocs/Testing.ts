export const TestMoc = {
  id: 1,
  title: 'test',
  description: '',
  theme: '',
  difficulty: 'Easy',
  author: 'I am',
  created: null,
  updated: null,
  questions: [
    {
      id: 1,
      title: '',
      type: 'Single-choice',
      textQuestion: '',
      timer: '',
      correctAnswer: '',
      content: {
        options: ['Node,js', 'Type Script', 'Java Script', 'React'],
      },
    },
  ],
};

export const TestOptionsMoc = [
  'Node.js',
  'Type Script',
  'Java Script',
  'React',
];

export const AllTestOptionsMoc = [
  {
    id: 1,
    timer: 200,
    title: 'NodeJS question #13',
    content: {
      question: 'Which core module in Node can you use for testing?',
      answers: {
        wrong: 'Type Script//Java Script//React',
        correct: 'Node,js',
      },
    },
    type: 'oneChoice',
    difficulty: 'easy',
    description: 'easy',
    topicId: 1,
  },
  {
    id: 2,
    timer: 220,
    title: 'NodeJS question #13',
    content: {
      question: 'what is 2 plus 2 ?',
      answers: {
        wrong: 'two//three//five',
        correct: 'four',
      },
    },
    type: 'oneChoice',
    difficulty: 'easy',
    description: 'easy',
    topicId: 1,
  },
  {
    id: 3,
    timer: 250,
    title: 'NodeJS question #13',
    content: {
      question: '"true" - What data type is it ?',
      answers: {
        wrong: 'number//boolean//null',
        correct: 'string',
      },
    },
    type: 'multiChoice',
    difficulty: 'normal',
    description: 'normal',
    topicId: 1,
  },
];
