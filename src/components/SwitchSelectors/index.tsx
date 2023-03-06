//@ts-ignore
import SwitchSelector from 'react-native-switch-selector';
import {Color} from '@theme/colors';
import {View} from 'react-native';
import {ISwitchSelectProps} from 'src/customTypes/SwitchSelectjrs-types';
import {useMemo} from 'react';
import {styles} from './styles';
import {useAppSelector} from '@hooks/hooks';

export const SwitchSelectors = ({onPress, type, value, disabled}: ISwitchSelectProps) => {
  const currentTheme = useAppSelector(state => state.app.currentTheme);

  const containerData = useMemo(
    () =>
      type === 'level'
        ? [
            {label: 'Easy', value: 'light'},
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
            {label: 'All', value: 'All'},
            {label: 'My', value: 'My'},
          ],
    [type],
  );

  const backgroundColor = disabled
    ? Color.Transparent
    : currentTheme === 'light'
    ? Color.White
    : Color.VioletBlue;
  const borderColor = currentTheme === 'light' ? Color.Gray : Color.DarkPurpleBlue;
  const textColor = currentTheme === 'light' ? Color.Black : Color.White;

  return (
    <View style={styles.selectBox}>
      <SwitchSelector
        options={containerData}
        initial={0}
        value={containerData.findIndex(el => el.value === value)}
        onPress={onPress}
        selectedColor={Color.White}
        buttonColor={Color.BlueLight}
        textColor={textColor}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        hasPadding
        disabled={disabled}
      />
    </View>
  );
};
