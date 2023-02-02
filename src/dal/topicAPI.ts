import {instance} from '@src/dal/instance';
import {createTopic} from '@customTypes/quizzesAPI-types';

export const topicAPI = {
  getTopics() {
    return instance.get('/topic');
  },
  createTopic(param: createTopic) {
    return instance.post('/topic', param);
  },
};
