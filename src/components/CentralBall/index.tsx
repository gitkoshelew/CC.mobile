import React from 'react';
import {Color} from '@theme/colors';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '@src/components/CentralBall/styles';
import {ViewDynamicFlex} from '@src/components/ui/ReadyStyles/Containers/index';

type CentralBallPropsType = {
  value: number;
  description: string;
};

export const CentralBall = ({value, description}: CentralBallPropsType) => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.05}}
      end={{x: 0.6, y: 1.0}}
      colors={[Color.BlueLight, Color.DarkBlue]}
      style={styles.container}>
      <ViewDynamicFlex alignI="center" justifyC="center">
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.description}>{description}</Text>
      </ViewDynamicFlex>
    </LinearGradient>
  );
};
