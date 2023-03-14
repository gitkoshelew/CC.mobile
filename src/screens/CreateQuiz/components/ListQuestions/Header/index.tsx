import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {BlockBox} from '@src/components/ui/ReadyStyles/Boxes';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Color} from '@theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DefaultTimeType} from '@src/utils/transformTime';
import {DefaultTheme} from 'styled-components';
import {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import {useTranslation} from 'react-i18next';
import {transformLocalizationLanguage} from '@src/utils/transformLocalizationLanguage';

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
  const {t} = useTranslation('SwitchSelectors');
  const {isActive, time, title, topic, onPress, difficulty, isAddedQuestion} = props;
  const theme = useContext(ThemeContext);

  return (
    <View
      style={[
        styles(theme).wrapper,
        isActive ? styles(theme).active : styles(theme).inactive,
      ]}>
      <View>
        <BlockBox>
          <Text style={styles(theme).title}>{title}</Text>
        </BlockBox>
        <View style={styles().container}>
          <Fontisto style={styles().icon} name="hashtag" color={Color.BlueLight} size={16} />
          <Text style={styles(theme).text}>{topic}</Text>
        </View>
        <View style={styles().container}>
          <MaterialCommunityIcons
            style={styles().icon}
            name="progress-question"
            color={Color.BlueLight}
            size={18}
          />
          <Text style={styles(theme).text}>
            {t(transformLocalizationLanguage({difficulty}))}
          </Text>
        </View>
        <View style={styles().container}>
          <MaterialCommunityIcons
            style={styles().icon}
            name="timelapse"
            color={Color.BlueLight}
            size={18}
          />
          <Text style={styles(theme).text}>
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

const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  wrapper: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme?.block,
    borderRadius: 15,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    elevation: 6,
  } as ViewStyle,
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 7,
  } as ViewStyle,
  icon: {
    marginRight: 10,
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontWeight: '500',
    color: theme?.textMainColor,
  } as ViewStyle,
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: theme?.textMainColor,
  } as ViewStyle,
  active: {
    backgroundColor: theme?.block,
  },
  inactive: {
    backgroundColor: theme?.block,
  },
}));
