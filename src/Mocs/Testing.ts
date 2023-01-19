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

export const quizIdMoc = {
  id: 1,
  title: 'NodeJS',
  description: 'General questions about Node.js',
  authorId: 1,
  author: {
    id: 1,
    name: 'Mary',
    surname: null,
    email: 'mary.bogdanova88@gmail.com',
    nickname: 'MaryBog',
    password: 'mary123qwePass',
    status: null,
  },
  questions: [
    {
      id: 1,
      title: 'Which of the following is a core module in Node?',
      content: {
        options: ['webpack', 'crypto', 'request', 'chalk'],
        correctAnswer: ['crypto'],
      },
      type: 'single',
      difficulty: 'medium',
      description: 'that test will show us ur power in Node js',
      timer: 600,
      topicId: 1,
      moderationId: 1,
    },
    {
      id: 2,
      title: 'what is 2 plus 2 ?',
      content: {
        options: ['eight minus four', 'three', 'five', 'four'],
        correctAnswer: ['four', 'eight minus four'],
      },
      type: 'multi',
      difficulty: 'light',
      description: 'that test will show us ur power in Node js',
      timer: 600,
      topicId: 1,
      moderationId: 1,
    },
    {
      id: 3,
      title: '"true" - What data type is it ?',
      content: {
        options: ['number', 'boolean', 'null', 'string'],
        correctAnswer: ['string'],
      },
      type: 'single',
      difficulty: 'light',
      description: 'that test will show us ur power in Node js',
      timer: 600,
      topicId: 1,
      moderationId: 1,
    },
  ],
};
