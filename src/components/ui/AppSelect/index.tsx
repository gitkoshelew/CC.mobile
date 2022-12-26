import {getStyles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import {ISelectProps} from '../type/AppSelect-types';
import {useCallback} from 'react';

export const AppSelect = ({size, type, data}: ISelectProps) => {
  // via useMemo does not work
  const styles = useCallback(
    () => getStyles({size, type, data}),
    [data, size, type],
  )();
  {
    /* Examples   https://github.com/AdelRedaa97/react-native-select-dropdown/blob/master/examples/demo1.js*/
  }
  return (
    <SelectDropdown
      data={data}
      defaultValueByIndex={1}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      defaultButtonText={'Select country'}
      buttonTextAfterSelection={selectedItem => selectedItem}
      rowTextForSelection={item => item}
      buttonStyle={styles.select}
      buttonTextStyle={styles.selectSortText}
      renderDropdownIcon={isOpened => (
        <FontAwesome
          style={styles.selectAwesome}
          name={isOpened ? 'chevron-up' : 'chevron-down'}
          size={14}
        />
      )}
      dropdownIconPosition={'right'}
      dropdownStyle={styles.selectContainer}
      rowStyle={styles.selectBox}
      rowTextStyle={styles.selectText}
      selectedRowStyle={styles.selectRow}
    />
  );
};
