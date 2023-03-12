import {Text, View} from 'react-native';
import {styles} from './styles';
import {AppButton} from '../ui/AppButton';
import {TypeAppButton} from '@customTypes/AppButtun-types';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Color} from '@theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';

type ITestCard = {
  id: number;
  questions: number;
  topic: string;
  onPress: (id: number, questions: number) => void;
  title: string;
};

export const TestCard = ({onPress, title, id, topic, questions}: ITestCard) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles().container}>
      <View style={styles(theme).test}>
        <View>
          <Text style={styles(theme).title}>{title}</Text>
          <View style={styles().contentContainer}>
            <View style={styles().content}>
              <Fontisto
                style={styles().iconTopic}
                name="hashtag"
                color={Color.BlueLight}
                size={10}
              />
              <Text style={styles(theme).text}>{topic}</Text>
            </View>
            <View style={styles().content}>
              <MaterialCommunityIcons
                style={styles().icon}
                name="progress-question"
                color={Color.BlueLight}
                size={13}
              />
              <Text style={styles(theme).text}>difficulty</Text>
            </View>
          </View>
        </View>
        <Text style={styles(theme).description}>Questions: {questions}</Text>
        <AppButton
          type={TypeAppButton.PRIMARY}
          title="Start"
          onPress={() => onPress(id, questions)}
        />
      </View>
    </View>
  );
};
