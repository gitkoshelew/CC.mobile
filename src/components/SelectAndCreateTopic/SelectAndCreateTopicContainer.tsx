import React, {useCallback, useEffect, useState} from 'react';
import {SelectAndCreateTopic} from '@src/components/SelectAndCreateTopic/SelectAndCreateTopic';
import {
  Control,
  FieldPath,
  FieldValues,
  Path,
  UseFormClearErrors,
  UseFormSetValue,
} from 'react-hook-form';
import {createTopic, getTopics} from '@src/screens/CreateQuiz/services/services';
import {TopicType} from '@customTypes/quizzesAPI-types';
import {useAppDispatch} from '@hooks/hooks';

type SelectAndCreateTopicContainerPropsType<T extends FieldValues> = {
  control: Control<T>;
  setValue: UseFormSetValue<T>;
  clearErrors?: UseFormClearErrors<T>;
};

export const SelectAndCreateTopicContainer = <T extends FieldValues>({
  control,
  setValue,
  clearErrors,
}: SelectAndCreateTopicContainerPropsType<T>) => {
  const dispatch = useAppDispatch();

  const [topics, setTopics] = useState<TopicType[]>([]);

  const handlerCreateTopic = useCallback(
    async (topicName: string) => {
      const newTopic = await dispatch(createTopic(topicName)).unwrap();
      const allTopics = await dispatch(getTopics()).unwrap();
      setTopics(allTopics);
      setValue('topicId' as FieldPath<T>, newTopic.id);
      clearErrors && clearErrors('topicId' as Path<T>);
    },
    [clearErrors, dispatch, setValue],
  );

  useEffect(() => {
    dispatch(getTopics())
      .unwrap()
      .then(res => {
        setTopics(res);
      });
  }, [dispatch, setValue]);

  return (
    <SelectAndCreateTopic
      mainControl={control}
      topics={topics}
      onCreateTopic={handlerCreateTopic}
    />
  );
};
