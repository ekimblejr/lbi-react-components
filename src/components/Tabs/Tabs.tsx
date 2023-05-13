import React, { useState } from 'react';
import Tab from './Tab';
import './tabs.css';

export interface TabsProps {
  tabList: Array<string>;
}

const Tabs = ({ tabList }: TabsProps) => {
  const [active, setActive] = useState(tabList[0]);
  const handleTabChange = (tab: string) => {
    setActive(tab);
  };
  return (
    <div className="tabs">
      <ul className="tab-list">
        {tabList.map((tab) => {
          return (
            <Tab
              key={tab}
              label={tab}
              active={active === tab}
              onClick={() => handleTabChange(tab)}
            />
          );
        })}
      </ul>
      <div className="tab-content">
        <p>Test Text</p>
      </div>
    </div>
  );
};

export default Tabs;
