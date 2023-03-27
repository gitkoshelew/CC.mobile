import {instance} from '@src/dal/instance';
import {createTopicType} from '@customTypes/quizzesAPI-types';

export const topicAPI = {
  getTopics() {
    return instance.get('/topic');
  },
  getTopic(topicId: number) {
    return instance.get(`/topic/${topicId}`);
  },
  createTopic(param: createTopicType) {
    return instance.post('/topic', param);
  },
};
