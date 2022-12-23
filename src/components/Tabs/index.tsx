import {FlatList} from 'react-native';
import {Tab} from './Tab';
import {useState} from 'react';
import {TabsBox} from './styles';

type renderTabsT = {
  item: string;
  index: number;
};

export const Tabs = () => {
  const tabsData = [
    'All',
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
  ];
  const [currentTab, setCurrentTab] = useState<number>(0);

  const renderTabs = ({item, index}: renderTabsT) => (
    <Tab
      key={index}
      item={item}
      index={index}
      isActive={currentTab === index}
      setCurrentTab={setCurrentTab}
    />
  );

  return (
    <TabsBox>
      <FlatList
        data={tabsData}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={renderTabs}
      />
    </TabsBox>
  );
};