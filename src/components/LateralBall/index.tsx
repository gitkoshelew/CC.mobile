import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {styles} from '@src/components/LateralBall/styles';
import {ThemeContext} from 'styled-components/native';

type LateralBallPropsType = {
  value: string;
  description: string;
};

export const LateralBall = ({value, description}: LateralBallPropsType) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).value}>{value}</Text>
      <Text style={styles(theme).description}>{description}</Text>
    </View>
  );
};
