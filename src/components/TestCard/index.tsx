import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import AppButton from '../ui/AppButton';
const TestCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Node.js</Text>
      <Text style={styles.description}>General questions about Node.js</Text>
      <AppButton type={'primary'} title={'Start'} />
    </View>
  );
};

export default TestCard;
