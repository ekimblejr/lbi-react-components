import React from 'react';
import classNames from 'classnames';

export interface TabProps {
  index: number;
  key: number;
  tabName: string;
  setSelectedTab: (index: number) => void;
  selected: number;
}

const Tab = ({ index, tabName, setSelectedTab, selected }: TabProps) => {
  const tabactive = selected == index ? 'active' : '';
  return (
    <li
      className={classNames(`${tabactive}`)}
      onClick={() => setSelectedTab(index)}
    >
      {tabName}
    </li>
  );
};

export default Tab;
