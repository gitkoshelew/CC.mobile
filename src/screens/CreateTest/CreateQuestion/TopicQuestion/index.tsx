import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CustomTextInput} from '@src/components/ui/CustomTextInput/index';
import {AppSelect} from '@src/components/ui/AppSelect/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '@theme/colors';

export const TopicQuestion = () => {
  const data = [...new Array(10)].map((_, i) => ({id: i + 1, title: 'topic' + i}));
  const topicData = data.map(el => el.title);
  return (
    <View style={styles.container}>
      <View style={styles.selectContainer}>
        <AppSelect data={topicData} size="m" type="primary" onSelect={() => {}} />
      </View>
      <View style={styles.createTopicContainer}>
        <View style={styles.input}>
          <CustomTextInput />
        </View>
        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={30} color={Color.BlueLight} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectContainer: {
    width: 145,
    maxHeight: 100,
    marginRight: 15,
  },
  createTopicContainer: {
    width: 145,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginRight: 10,
  },
});
