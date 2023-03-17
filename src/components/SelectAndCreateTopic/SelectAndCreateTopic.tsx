import React, {useCallback} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppSelect} from '@src/components/ui/AppSelect';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '@theme/colors';
import {Control, Controller, FieldValues, Path, useForm} from 'react-hook-form';
import {TopicType} from '@customTypes/quizzesAPI-types';
import {TextInputHookForm} from '@src/components/TextInputHookForm';
import {useTranslation} from 'react-i18next';

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
  const {t} = useTranslation(['topic', 'validationFields']);
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
                  return t('topic.Select or create topic', {ns: 'validationFields'})!;
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
            placeholder={t('Topic name')!}
            rules={{
              required: `${t('topic.required', {ns: 'validationFields'})}`,
              maxLength: {
                value: 20,
                message: `${t('topic.maxLength', {ns: 'validationFields'})}`,
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
    height: Platform.OS === 'ios' ? '100%' : '81%',
    marginRight: 10,
  },
  button: {
    paddingTop: 3,
  },
});
