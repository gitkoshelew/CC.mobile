export type IAllTestOptionsMoc = Array<ITestOptionsMoc>;
export interface ITestOptionsMoc {
  id: number;
  title: string;
  content: {
    question: string;
    answers: {
      wrong: string;
      correct: string;
    };
  };
  type: 'oneChoice' | 'multiChoice';
  difficulty: 'easy' | 'normal' | 'hard';
  description: string;
  topicId: number;
}
