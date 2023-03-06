import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import {ISelectProps} from 'src/customTypes/AppSelect-types';
import {useContext, useMemo} from 'react';
import {Color} from '@theme/colors';
import {ThemeContext} from 'styled-components/native';

export const AppSelect = ({size, type, data, onSelect, value, ...props}: ISelectProps) => {
  const theme = useContext(ThemeContext);

  const containerButtonStyle = useMemo(
    () => ({
      backgroundColor: type === 'primary' ? Color.DarkBlue : Color.White,
      borderRadius: size === 'm' ? 15 : 5,
      height: size === 'm' ? 36 : 26,
      width: size === 'm' ? '100%' : 125,
    }),
    [type, size],
  );
  const containerButtonTextStyle = useMemo(
    () => ({
      ...styles(theme).selectSortText,
      color: type === 'primary' ? Color.White : Color.Black,
      fontSize: size === 'm' ? 16 : 14,
    }),

    [theme, type, size],
  );
  const rowTextStyle = useMemo(
    () => ({
      ...styles(theme).selectText,
      fontSize: size === 'm' ? 16 : 14,
    }),
    [size, theme],
  );
  const rowStyle = useMemo(
    () => ({
      height: size === 'm' ? 36 : 29,
    }),
    [size],
  );
  const selectAwesomeStyle = useMemo(
    () => ({
      ...styles().selectAwesome,
      color: type === 'primary' ? Color.Gray : Color.Black,
    }),
    [type],
  );

  return (
    <SelectDropdown
      {...props}
      data={data}
      onSelect={onSelect}
      defaultValue={value}
      buttonTextAfterSelection={selectedItem => selectedItem}
      rowTextForSelection={item => item}
      buttonStyle={containerButtonStyle}
      buttonTextStyle={containerButtonTextStyle}
      renderDropdownIcon={isOpened => (
        <FontAwesome
          style={selectAwesomeStyle}
          name={isOpened ? 'chevron-up' : 'chevron-down'}
          size={14}
        />
      )}
      dropdownIconPosition={'right'}
      dropdownStyle={styles(theme).selectContainer}
      rowStyle={rowStyle}
      rowTextStyle={rowTextStyle}
      selectedRowStyle={styles(theme).selectRow}
    />
  );
};
