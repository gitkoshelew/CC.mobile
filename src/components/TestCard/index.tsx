import {Text, View} from 'react-native';
import {styles} from './styles';
import {AppButton} from '../ui/AppButton';
import {TypeAppButton} from '@customTypes/AppButtun-types';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Color} from '@theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type ITestCard = {
  id: number;
  questions: number;
  topic: string;
  onPress: (id: number) => void;
  title: string;
};

export const TestCard = ({onPress, title, id, topic, questions}: ITestCard) => {
  return (
    <View style={styles.container}>
      <View style={styles.test}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Fontisto
                style={styles.iconTopic}
                name="hashtag"
                color={Color.BlueLight}
                size={10}
              />
              <Text style={styles.text}>{topic}</Text>
            </View>
            <View style={styles.content}>
              <MaterialCommunityIcons
                style={styles.icon}
                name="progress-question"
                color={Color.BlueLight}
                size={13}
              />
              <Text style={styles.text}>difficulty</Text>
            </View>
          </View>
        </View>
        <Text style={styles.description}>Questions: {questions}</Text>
        <AppButton type={TypeAppButton.PRIMARY} title="Start" onPress={() => onPress(id)} />
      </View>
    </View>
  );
};
