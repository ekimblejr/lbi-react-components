import React, { useState } from 'react';
import Tab from './Tab';
import './tabs.css';
import _TabContent from '../../assets/data/tabContent.json';

export interface ITabsList {
  tabList: Array<ITabsProps>;
}

export interface ITabsProps {
  id: number;
  tabName: string;
  tabContent: string;
}

const Tabs = ({ tabList }: ITabsList) => {
  const [selectedTabContent, setSelectedTabContent] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (index: number) => {
    setSelectedTab(index);
    console.log('SelectedTabContent: ' + tabList[index].tabContent);
    setSelectedTabContent(tabList[index].tabContent);
  };
  return (
    <div className="tabs">
      <ul className="tab-list">
        {tabList.map((item, index) => {
          return (
            <Tab
              index={index}
              key={item.id}
              tabName={item.tabName}
              tabContent={item.tabContent}
              setSelectedTab={handleTabChange}
            />
          );
        })}
      </ul>
      <div className="tab-content">{selectedTabContent}</div>
    </div>
  );
};

export default Tabs;
