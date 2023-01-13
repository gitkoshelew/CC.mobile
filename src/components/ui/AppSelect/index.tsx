import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import {ISelectProps} from '@customTypes/AppSelect-types';
import {useMemo} from 'react';
import {Color} from '@theme/colors';

export const AppSelect = ({
  size,
  type,
  data,
  onSelect,
  value,
  ...props
}: ISelectProps) => {
  const containerButtonStyle = useMemo(
    () => ({
      backgroundColor: type === 'primary' ? Color.Blue : Color.White,
      borderRadius: size === 'm' ? 15 : 5,
      height: size === 'm' ? 36 : 26,
      width: size === 'm' ? '100%' : 125,
    }),
    [type, size],
  );
  const containerButtonTextStyle = useMemo(
    () => ({
      ...styles.selectSortText,
      color: type === 'primary' ? Color.White : Color.Black,
      fontSize: size === 'm' ? 16 : 14,
    }),

    [type, size],
  );
  const rowTextStyle = useMemo(
    () => ({
      ...styles.selectText,
      fontSize: size === 'm' ? 16 : 14,
    }),
    [size],
  );
  const rowStyle = useMemo(
    () => ({
      height: size === 'm' ? 36 : 29,
    }),
    [size],
  );
  const selectAwesomeStyle = useMemo(
    () => ({
      ...styles.selectAwesome,
      color: type === 'primary' ? Color.Gray : Color.Black,
    }),
    [type],
  );

  return (
    <SelectDropdown
      {...props}
      data={data}
      onSelect={onSelect}
      defaultValue={value || data[0]}
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
      dropdownStyle={styles.selectContainer}
      rowStyle={rowStyle}
      rowTextStyle={rowTextStyle}
      selectedRowStyle={styles.selectRow}
    />
  );
};
