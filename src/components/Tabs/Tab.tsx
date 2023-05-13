import React from 'react';
import classNames from 'classnames';

export interface TabProps {
  key: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const Tab = ({ label, active }: TabProps) => {
  return <li className={classNames()}>{active ? label : 'NOT ACTIVE'}</li>;
};

export default Tab;
