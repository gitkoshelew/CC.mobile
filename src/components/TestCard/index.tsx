import {Text, View} from 'react-native';
import {styles} from './styles';
import {AppButton} from '../ui/AppButton';

type ITestCard = {
  id: number;
  onPress: (id: number) => void;
  title: string;
};

export const TestCard = ({onPress, title, id}: ITestCard) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>Description</Text>
      <AppButton type="primary" title="Start" onPress={() => onPress(id)} />
    </View>
  );
};
