import {Text, View} from 'react-native';
import {styles} from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Sort = () => {
  const data = ['Verify', 'Date', 'Popularity', 'Something else'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sorting</Text>
      {/* Examples   https://github.com/AdelRedaa97/react-native-select-dropdown/blob/master/examples/demo1.js*/}
      <SelectDropdown
        data={data}
        defaultValue={'Date'}
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
      />
    </View>
  );
};
