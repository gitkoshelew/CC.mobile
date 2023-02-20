import {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {Color} from '@theme/colors';
import {Header} from '@src/screens/CreateQuiz/components/ListQuestions/Header/index';
import {Content} from '@src/screens/CreateQuiz/components/ListQuestions/Content/index';

type ContentSectionType = {
  title: string;
  description: string;
  content: {
    options: string[];
    correctAnswer: string[];
  };
};

const FAKE_CONTENT = [...Array(5)].map(() => ({
  title: 'Question 1',
  description:
    'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork',
  content: {
    options: ['answer1', 'answer2', 'answer3', 'answer4'],
    correctAnswer: ['answer2'],
  },
}));

export const ListQuestions = () => {
  const [activeSections, setActiveSections] = useState([]);

  const setSections = (sections: never[]) => {
    setActiveSections(sections.includes(undefined!) ? [] : sections);
  };

  const renderHeader = (section: ContentSectionType, index: number, isActive: boolean) => {
    return <Header isActive={isActive} title={section.title} />;
  };

  const renderContent = (section: ContentSectionType, index: number, isActive: boolean) => {
    return (
      <Content
        isActive={isActive}
        description={section.description}
        options={section.content.options}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Accordion
          align="bottom"
          activeSections={activeSections}
          sections={FAKE_CONTENT}
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
});
