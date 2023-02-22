import {FlatList} from 'react-native';
import {Tab} from './Tab';
import {useState} from 'react';
import {TabsBox} from './styles';
import {renderItemType} from '@customTypes/common-types';

type TabsPropsType = {
  data: string[];
  onPress: (value: string) => void;
};

export const Tabs = ({data, onPress}: TabsPropsType) => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  const renderTabs = ({item, index}: renderItemType) => (
    <Tab
      key={index}
      item={item}
      index={index}
      onPress={onPress}
      isActive={currentTabIndex === index}
      setCurrentTab={setCurrentTabIndex}
    />
  );

  return (
    <TabsBox>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={renderTabs}
        testID="FlatList"
      />
    </TabsBox>
  );
};
