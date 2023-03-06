import CircularProgress from 'react-native-circular-progress-indicator';
import {Color} from '@theme/colors';
import {StyleSheet} from 'react-native';
import {ViewCenter} from '../ui/ReadyStyles/Containers';
import {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';

interface IProps {
  result: number;
}

export const CircularResultBar = ({result}: IProps) => {
  const theme = useContext(ThemeContext);

  return (
    <ViewCenter>
      <CircularProgress
        value={result}
        radius={83}
        progressValueStyle={styles.progressValueStyle}
        valueSuffix={'%'}
        duration={1500}
        activeStrokeWidth={26}
        activeStrokeColor={Color.BlueLight}
        inActiveStrokeWidth={26}
        inActiveStrokeColor={theme.box}
      />
    </ViewCenter>
  );
};

const styles = StyleSheet.create({
  progressValueStyle: {
    fontSize: 38,
    fontFamily: 'Montserrat-Regular',
    color: Color.BlueLight,
  },
});
