import React, { useState } from 'react';
import Tab from './Tab';
import './tabs.css';

export interface TabsProps {
  tabList: Array<string>;
}

const Tabs = ({ tabList }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };
  return (
    <div className="tabs">
      <ul className="tab-list">
        {tabList.map((tab, index) => {
          return (
            <Tab
              key={index}
              label={tab}
              index={index}
              setSelectedTab={handleTabChange}
            />
          );
        })}
      </ul>
      {selectedTab}
    </div>
  );
};

export default Tabs;
