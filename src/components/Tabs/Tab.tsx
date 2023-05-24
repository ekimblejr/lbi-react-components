import React from 'react';
import classNames from 'classnames';

export interface TabProps {
  index: number;
  key: number;
  tabName: string;
  setSelectedTab: (index: number) => void;
  isSelected: number;
}

const Tab = ({ index, tabName, setSelectedTab, isSelected }: TabProps) => {
  const tabactive = isSelected == index ? 'active' : '';
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
