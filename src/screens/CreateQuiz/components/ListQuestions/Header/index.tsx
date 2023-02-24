import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BlockBox} from '@src/components/ui/ReadyStyles/Boxes/index';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Color} from '@theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DefaultTimeType} from '@src/utils/transformTime';

type HeaderPropsType = {
  time: DefaultTimeType;
  title: string;
  topic: string;
  onPress: () => void;
  isActive: boolean;
  difficulty: string;
  isAddedQuestion: boolean;
};

export const Header = (props: HeaderPropsType) => {
  const {isActive, time, title, topic, onPress, difficulty, isAddedQuestion} = props;
  return (
    <View style={[styles.wrapper, isActive ? styles.active : styles.inactive]}>
      <View>
        <BlockBox>
          <Text style={styles.title}>{title}</Text>
        </BlockBox>
        <View style={styles.container}>
          <Fontisto style={styles.icon} name="hashtag" color={Color.BlueLight} size={16} />
          <Text style={styles.text}>{topic}</Text>
        </View>
        <View style={styles.container}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="progress-question"
            color={Color.BlueLight}
            size={18}
          />
          <Text style={styles.text}>{difficulty}</Text>
        </View>
        <View style={styles.container}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="timelapse"
            color={Color.BlueLight}
            size={18}
          />
          <Text style={styles.text}>
            {time.minutes}m. {time.seconds}s.
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        {isAddedQuestion ? (
          <Ionicons name="ios-checkmark-circle-outline" size={40} color={Color.Green} />
        ) : (
          <Ionicons
            name="add-circle-outline"
            size={40}
            color={Color.BlueLight}
            onPress={onPress}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.White,
    borderRadius: 15,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    elevation: 6,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 7,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontWeight: '500',
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  active: {
    backgroundColor: Color.White,
  },
  inactive: {
    backgroundColor: Color.White,
  },
});
