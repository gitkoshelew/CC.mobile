import {useCallback, useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {ScrollView, TouchableOpacity} from 'react-native';
import {questionResponseType, questionType} from '@customTypes/quiz-types';
import {Header} from '@src/screens/CreateQuiz/components/ListQuestions/Header/index';
import {Content} from '@src/screens/CreateQuiz/components/ListQuestions/Content/index';
import {DefaultTimeType, transformTime} from '@src/utils/transformTime';
import {useAppSelector} from '@hooks/hooks';

type ListingQuestionsPropsType = {
  filteredQuestions: questionResponseType[];
  onPressAddQuestion: (questionId: number) => void;
  currentQuizQuestions: questionType[];
};

export const ListingQuestions = ({
  filteredQuestions,
  onPressAddQuestion,
  currentQuizQuestions,
}: ListingQuestionsPropsType) => {
  const isScrollEnabled = useAppSelector(state => state.app.isScrollEnabled);
  const [activeSections, setActiveSections] = useState([]);

  const setSections = useCallback((sections: never[]) => {
    setActiveSections(sections.includes(undefined!) ? [] : sections);
  }, []);

  const renderHeader = useCallback(
    (section: questionResponseType, index: number, isActive: boolean) => {
      const questionId = section.id;
      const isNotEmptyFirstQuestion = !!currentQuizQuestions[0].title;
      const isAddedQuestion =
        isNotEmptyFirstQuestion && !!currentQuizQuestions.find(el => el.id === section.id);

      const time = transformTime({
        format: 'default',
        totalSeconds: section.timer,
      }) as DefaultTimeType;

      return (
        <Header
          time={time}
          isActive={isActive}
          title={section.title}
          topic={section.topic.title}
          difficulty={section.difficulty}
          isAddedQuestion={isAddedQuestion}
          onPress={() => onPressAddQuestion(questionId)}
        />
      );
    },
    [currentQuizQuestions, onPressAddQuestion],
  );

  const renderContent = useCallback(
    (section: questionResponseType, index: number, isActive: boolean) => {
      return (
        <Content
          isActive={isActive}
          description={section.description}
          options={section.content.options}
        />
      );
    },
    [],
  );

  return (
    <ScrollView scrollEnabled={isScrollEnabled}>
      <Accordion
        align="bottom"
        activeSections={activeSections}
        sections={filteredQuestions}
        touchableComponent={TouchableOpacity}
        renderHeader={renderHeader}
        renderContent={renderContent}
        duration={400}
        onChange={setSections}
        renderAsFlatList={false}
      />
    </ScrollView>
  );
};
