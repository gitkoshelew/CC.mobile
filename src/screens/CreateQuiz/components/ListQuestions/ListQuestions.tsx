import {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {Color} from '@theme/colors';
import {
  BlockBox,
  BlockDynamicMargin,
  CustomText,
} from '@src/components/ui/ReadyStyles/Boxes/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

type ContentSectionType = {
  title: string;
  description: string;
  content: {
    options: string[];
    correctAnswer: string[];
  };
};

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork';

const CONTENT = [
  {
    title: 'Question 1',
    description: BACON_IPSUM,
    content: {
      options: ['answer1', 'answer2', 'answer3', 'answer4'],
      correctAnswer: ['answer2'],
    },
  },
  {
    title: 'Second',
    description: BACON_IPSUM,
    content: {
      options: ['answer1', 'answer2', 'answer3', 'answer4'],
      correctAnswer: ['answer2'],
    },
  },
  {
    title: 'Third',
    description: BACON_IPSUM,
    content: {
      options: ['answer1', 'answer2', 'answer3', 'answer4'],
      correctAnswer: ['answer2'],
    },
  },
  {
    title: 'Fourth',
    description: BACON_IPSUM,
    content: {
      options: ['answer1', 'answer2', 'answer3', 'answer4'],
      correctAnswer: ['answer2'],
    },
  },
  {
    title: 'Fifth',
    description: BACON_IPSUM,
    content: {
      options: ['answer1', 'answer2', 'answer3', 'answer4'],
      correctAnswer: ['answer2'],
    },
  },
];

export const ListQuestions = () => {
  const [activeSections, setActiveSections] = useState([]);

  const setSections = (sections: never[]) => {
    setActiveSections(sections.includes(undefined!) ? [] : sections);
  };

  const renderHeader = (section: ContentSectionType, index: number, isActive: boolean) => {
    return (
      <View style={[styles.header, isActive ? styles.active : styles.inactive]}>
        <View>
          <BlockBox>
            <Text style={styles.headerTitle}>{section.title}</Text>
          </BlockBox>
          <View style={styles.headerContainer}>
            <Fontisto style={styles.icon} name="hashtag" color={Color.BlueLight} size={16} />
            <Text style={styles.headerText}>React</Text>
          </View>
          <View style={styles.headerContainer}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="progress-question"
              color={Color.BlueLight}
              size={18}
            />
            <Text style={styles.headerText}>light</Text>
          </View>
          <View style={styles.headerContainer}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="timelapse"
              color={Color.BlueLight}
              size={18}
            />
            <Text style={styles.headerText}>1000 sec.</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={40} color={Color.BlueLight} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = (section: ContentSectionType, index: number, isActive: boolean) => {
    return (
      <View style={[styles.content, isActive ? styles.active : styles.inactive]}>
        <BlockBox>
          <Text style={styles.contentTitle}>Description:</Text>
          <CustomText fs="13px">{section.description}</CustomText>
        </BlockBox>
        <CustomText fs="15px" m="0 0 7px 0" fw="500">
          Options:
        </CustomText>
        <View>
          {section.content.options.map((el: string) => (
            <View style={styles.contentContainer}>
              <BlockDynamicMargin m="0 5px 0 0 ">
                <Entypo name="controller-record" color={Color.DarkBlue} size={8} />
              </BlockDynamicMargin>
              <CustomText fs="13px">{el}</CustomText>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Accordion
          align="bottom"
          activeSections={activeSections}
          sections={CONTENT}
          touchableComponent={TouchableOpacity}
          renderHeader={renderHeader}
          renderContent={renderContent}
          duration={400}
          onChange={setSections}
          renderAsFlatList={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.GrayLight,
    paddingTop: 10,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 7,
  },
  header: {
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
  headerTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontWeight: '500',
  },
  headerText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  icon: {
    marginRight: 10,
  },
  contentContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginBottom: 7,
    borderStyle: 'solid',
    borderColor: Color.GrayMedium,
    borderWidth: 1,
  },
  content: {
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: Color.White,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    elevation: 6,
  },
  contentTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
  },
  active: {
    backgroundColor: Color.White,
  },
  inactive: {
    backgroundColor: Color.White,
  },
});
