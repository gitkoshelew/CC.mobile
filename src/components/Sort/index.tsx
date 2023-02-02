import {Text, View} from 'react-native';
import {styles} from './styles';
import {AppSelect} from '../ui/AppSelect';

export const Sort = () => {
  const data = ['Verify', 'Date', 'Popularity', 'Something else'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sorting</Text>
      <AppSelect size="s" data={data} type="secondary" onSelect={() => {}} />
    </View>
  );
};
