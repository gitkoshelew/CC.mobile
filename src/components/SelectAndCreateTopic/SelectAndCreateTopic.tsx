import React, {useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppSelect} from '@src/components/ui/AppSelect/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '@theme/colors';
import {Control, Controller, FieldValues, Path, useForm} from 'react-hook-form';
import {TopicType} from '@customTypes/quizzesAPI-types';
import {TextInputHookForm} from '@src/components/TextInputHookForm/index';

type SelectAndCreateTopicPropsType<T extends FieldValues> = {
  mainControl: Control<T>;
  topics: TopicType[];
  onCreateTopic: (topicName: string) => Promise<void>;
};

type InputFieldType = {
  topicName: string;
};

export const SelectAndCreateTopic = <T extends FieldValues>({
  mainControl,
  onCreateTopic,
  topics,
}: SelectAndCreateTopicPropsType<T>) => {
  const {control, handleSubmit, reset} = useForm<InputFieldType>();

  const onPressCreateTopic = useCallback(
    ({topicName}: InputFieldType) => {
      onCreateTopic(topicName).then(() => {
        reset({topicName: ''});
      });
    },
    [onCreateTopic, reset],
  );

  const handlerSelectTopic = useCallback(
    (title: string, onChange: (value: number) => void) => {
      const topicId = topics.find(el => el.title === title)!.id;
      onChange(topicId);
    },
    [topics],
  );

  const getTopicTitle = (topicId: number, arrTopics: TopicType[]) => {
    const findTopicTitle = arrTopics.filter(el => el.id === topicId);
    return findTopicTitle.length ? findTopicTitle[0].title : '';
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectContainer}>
        <Controller
          control={mainControl}
          name={'topicId' as Path<T>}
          render={({field: {onChange, value}}) => (
            <AppSelect
              value={getTopicTitle(value, topics)}
              size="m"
              data={topics.map((el: TopicType) => el.title)}
              type="primary"
              onSelect={(changedValue: string) => handlerSelectTopic(changedValue, onChange)}
            />
          )}
          rules={{
            validate: {
              required: value => {
                if (value === 0) {
                  return 'Select or create topic';
                }
              },
            },
          }}
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
          <TouchableOpacity onPress={handleSubmit(onPressCreateTopic)}>
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