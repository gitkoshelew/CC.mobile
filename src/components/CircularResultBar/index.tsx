import CircularProgress, {ProgressRef} from 'react-native-circular-progress-indicator';
import {Color} from '@theme/colors';
import {StyleSheet} from 'react-native';
import {ViewCenter} from '../ui/ReadyStyles/Containers';
import {useContext, useRef} from 'react';
import {ThemeContext} from 'styled-components/native';

interface IProps {
  result: number;
}

export const CircularResultBar = ({result}: IProps) => {
  const theme = useContext(ThemeContext);
  const ref = useRef<ProgressRef>(null);

  return (
    <ViewCenter>
      <CircularProgress
        ref={ref}
        value={result || 0}
        radius={83}
        progressValueStyle={styles.progressValueStyle}
        valueSuffix={'%'}
        duration={1500}
        activeStrokeWidth={26}
        activeStrokeColor={Color.BlueLight}
        inActiveStrokeWidth={26}
        inActiveStrokeColor={theme.box}
        onAnimationComplete={() => {
          ref.current?.pause();
        }}
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
