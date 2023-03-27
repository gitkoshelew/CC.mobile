import React from 'react';
import {Tabs} from '@src/components/Tabs/index';
import {StyleSheet, View} from 'react-native';

type TabsQuestionsPropsType = {
  topics: string[];
  onPressTabs: (value: string) => void;
};

export const TabsQuestions = ({topics, onPressTabs}: TabsQuestionsPropsType) => {
  return (
    <View style={styles.container}>
      <Tabs data={topics} onPress={onPressTabs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
  },
});
