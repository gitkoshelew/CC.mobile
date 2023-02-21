import {useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {Color} from '@theme/colors';
import {Header} from '@src/screens/CreateQuiz/components/ListQuestions/Header/index';
import {Content} from '@src/screens/CreateQuiz/components/ListQuestions/Content/index';
import {questionResponseType} from '@customTypes/quiz-types';

type ListQuestionsPropsType = {
  questions: questionResponseType[];
};

export const ListQuestions = ({questions}: ListQuestionsPropsType) => {
  const [activeSections, setActiveSections] = useState([]);

  const setSections = useCallback((sections: never[]) => {
    setActiveSections(sections.includes(undefined!) ? [] : sections);
  }, []);

  const renderHeader = useCallback(
    (section: questionResponseType, index: number, isActive: boolean) => {
      return <Header isActive={isActive} title={section.title} topic={section.topic.title} />;
    },
    [],
  );

  const renderContent = (section: questionResponseType, index: number, isActive: boolean) => {
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
      <Accordion
        align="bottom"
        activeSections={activeSections}
        sections={questions}
        touchableComponent={TouchableOpacity}
        renderHeader={renderHeader}
        renderContent={renderContent}
        duration={400}
        onChange={setSections}
        renderAsFlatList={true}
      />
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
