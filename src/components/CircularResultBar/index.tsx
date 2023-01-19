import CircularProgress from 'react-native-circular-progress-indicator';
import {Color} from '@theme/colors';
import {StyleSheet} from 'react-native';

interface IProps {
  result: number;
}

export const CircularResultBar = ({result}: IProps) => {
  return (
    <CircularProgress
      value={result}
      radius={83}
      progressValueStyle={styles.progressValueStyle}
      valueSuffix={'%'}
      duration={1500}
      activeStrokeWidth={26}
      activeStrokeColor={Color.BlueLight}
      inActiveStrokeWidth={26}
      inActiveStrokeColor={Color.Gray}
    />
  );
};

const styles = StyleSheet.create({
  progressValueStyle: {
    fontSize: 45,
    fontFamily: 'Montserrat-Regular',
    color: Color.BlueLight,
  },
});
