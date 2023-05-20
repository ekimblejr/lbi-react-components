import React from 'react';
import classNames from 'classnames';

export interface TabProps {
  index: number;
  key: number;
  tabName: string;
  tabContent: string;
  setSelectedTab: (index: number) => void;
}

const Tab = ({ index, tabName, setSelectedTab }: TabProps) => {
  return (
    <li className={classNames()} onClick={() => setSelectedTab(index)}>
      {tabName}
    </li>
  );
};

export default Tab;
