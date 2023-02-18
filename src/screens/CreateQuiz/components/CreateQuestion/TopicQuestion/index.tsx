import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppSelect} from '@src/components/ui/AppSelect/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '@theme/colors';
import {useForm, UseFormSetValue} from 'react-hook-form';
import {useAppDispatch} from '@hooks/hooks';
import {TopicType} from '@customTypes/quizzesAPI-types';
import {TextInputHookForm} from '@src/components/TextInputHookForm/index';
import {CreateQuestionFieldType} from '@src/screens/CreateQuiz/components/CreateQuestion/CreateQuestion';
import {createTopic, getTopics} from '@src/screens/CreateQuiz/services/services';

type TopicQuestionPropsType = {
  setValue: UseFormSetValue<CreateQuestionFieldType>;
};

type InputFieldType = {
  topicName: string;
};

export const TopicQuestion = ({setValue}: TopicQuestionPropsType) => {
  const dispatch = useAppDispatch();
  const {control, handleSubmit, reset} = useForm<InputFieldType>();
  const [topics, setTopics] = useState<TopicType[]>([]);
  const [topic, setTopic] = useState<string>();

  const onCreateTopicPressed = async ({topicName}: InputFieldType) => {
    const newTopic = await dispatch(createTopic(topicName)).unwrap();
    const allTopics = await dispatch(getTopics()).unwrap();
    setTopics(allTopics);
    setValue('topicId', newTopic.id);
    setTopic(newTopic.title);
    reset({topicName: ''});
  };

  const onSelectTopicPressed = (title: string) => {
    const topicId = +topics.find(el => el.title === title)!.id;
    setTopic(title);
    setValue('topicId', topicId);
  };

  useEffect(() => {
    dispatch(getTopics())
      .unwrap()
      .then(res => {
        setTopics(res);
      });
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.selectContainer}>
        <AppSelect
          data={topics.map((el: TopicType) => el.title)}
          size="m"
          type="primary"
          onSelect={onSelectTopicPressed}
          value={topic}
        />
      </View>
      <View style={styles.createTopicTypeContainer}>
        <View style={styles.input}>
          <TextInputHookForm
            control={control}
            name="topicName"
            placeholder="Topic name..."
            rules={{
              required: 'Title is required',
              maxLength: {
                value: 20,
                message: 'Title should be maximum 20 characters long',
              },
            }}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={handleSubmit(onCreateTopicPressed)}>
            <AntDesign name="pluscircleo" size={30} color={Color.BlueLight} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  selectContainer: {
    width: 145,
    maxHeight: 100,
    marginRight: 15,
  },
  createTopicTypeContainer: {
    width: 145,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    marginRight: 10,
  },
  button: {
    paddingTop: 3,
  },
});
