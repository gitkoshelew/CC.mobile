//@ts-ignore
import SwitchSelector from 'react-native-switch-selector';
import {Color} from '@theme/colors';
import {View} from 'react-native';
import {ISwitchSelectProps} from 'src/customTypes/SwitchSelectjrs-types';
import {useMemo} from 'react';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

export const SwitchSelectors = ({onPress, type, value, disabled}: ISwitchSelectProps) => {
  const {t} = useTranslation('SwitchSelectors');

  const containerData = useMemo(
    () =>
      type === 'level'
        ? [
            {label: t('level.0'), value: 'light'},
            {label: t('level.1'), value: 'medium'},
            {label: t('level.2'), value: 'hard'},
          ]
        : type === 'number'
        ? [
            {label: '10', value: '10'},
            {label: '15', value: '15'},
            {label: '20', value: '20'},
            {label: '25', value: '25'},
            {label: '30', value: '30'},
          ]
        : type === 'typeAnswer'
        ? [
            {label: t('type.0'), value: 'single'},
            {label: t('type.1'), value: 'multi'},
          ]
        : [
            {label: 'All', value: 'All'},
            {label: 'My', value: 'My'},
          ],
    [t, type],
  );

  return (
    <View style={styles.selectBox}>
      <SwitchSelector
        options={containerData}
        initial={0}
        value={containerData.findIndex(el => el.value === value)}
        onPress={onPress}
        selectedColor={Color.White}
        buttonColor={Color.BlueLight}
        borderColor={Color.Gray}
        backgroundColor={disabled ? Color.Transparent : Color.White}
        hasPadding
        disabled={disabled}
      />
    </View>
  );
};
