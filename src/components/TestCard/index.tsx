import {Text, View} from 'react-native';
import {styles} from './styles';
import {AppButton} from '../ui/AppButton';
import {TypeAppButton} from '@customTypes/AppButtun-types';

type ITestCard = {
  id: number;
  onPress: (id: number) => void;
  title: string;
};

export const TestCard = ({onPress, title, id}: ITestCard) => {
  return (
    <View style={styles.container}>
      <View style={styles.test}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>Description</Text>
        <AppButton type={TypeAppButton.PRIMARY} title="Start" onPress={() => onPress(id)} />
      </View>
    </View>
  );
};
