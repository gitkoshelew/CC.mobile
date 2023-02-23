import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BlockBox} from '@src/components/ui/ReadyStyles/Boxes/index';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Color} from '@theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

type HeaderPropsType = {
  isActive: boolean;
  title: string;
};

export const Header = ({isActive, title}: HeaderPropsType) => {
  return (
    <View style={[styles.wrapper, isActive ? styles.active : styles.inactive]}>
      <View>
        <BlockBox>
          <Text style={styles.title}>{title}</Text>
        </BlockBox>
        <View style={styles.container}>
          <Fontisto style={styles.icon} name="hashtag" color={Color.BlueLight} size={16} />
          <Text style={styles.text}>React</Text>
        </View>
        <View style={styles.container}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="progress-question"
            color={Color.BlueLight}
            size={18}
          />
          <Text style={styles.text}>light</Text>
        </View>
        <View style={styles.container}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="timelapse"
            color={Color.BlueLight}
            size={18}
          />
          <Text style={styles.text}>1000 sec.</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons name="add-circle-outline" size={40} color={Color.BlueLight} />
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
