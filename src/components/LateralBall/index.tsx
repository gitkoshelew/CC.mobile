import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '@src/components/LateralBall/styles';

type LateralBallPropsType = {
  value: string;
  description: string;
};

export const LateralBall = ({value, description}: LateralBallPropsType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};
