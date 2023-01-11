//@ts-ignore
import SwitchSelector from 'react-native-switch-selector';
import {Color} from 'theme/colors';
import {View} from 'react-native';
import {ISwitchSelectProps} from 'types/SwitchSelectjrs-types';
import {useMemo} from 'react';
import {styles} from './styles';

export const SwitchSelectors = ({onPress, type}: ISwitchSelectProps) => {
  const containerData = useMemo(
    () =>
      type === 'level'
        ? [
            {label: 'Easy', value: 'easy'},
            {label: 'Medium', value: 'medium'},
            {label: 'Hard', value: 'hard'},
          ]
        : type === 'number'
        ? [
            {label: '10', value: '10'},
            {label: '15', value: '15'},
            {label: '20', value: '20'},
            {label: '25', value: '25'},
            {label: '30', value: '30'},
          ]
        : [
            {label: 'My', value: 'My'},
            {label: 'All', value: 'All'},
          ],
    [type],
  );

  return (
    <View style={styles.selectBox}>
      <SwitchSelector
        options={containerData}
        initial={0}
        onPress={onPress}
        selectedColor={Color.White}
        buttonColor={Color.BlueLight}
        borderColor={Color.Gray}
        hasPadding
      />
    </View>
  );
};
