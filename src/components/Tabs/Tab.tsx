import React from 'react';
import classNames from 'classnames';

export interface TabProps {
  key: number;
  label: string;
  index: number;
  setSelectedTab: (index: number) => void;
}

const Tab = ({ label, setSelectedTab, index }: TabProps) => {
  return (
    <li className={classNames()} onClick={() => setSelectedTab(index)}>
      {label}
    </li>
  );
};

export default Tab;
