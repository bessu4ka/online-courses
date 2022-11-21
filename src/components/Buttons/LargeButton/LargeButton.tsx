import { FC } from 'react';

import { IButton } from 'types/Button';

import styled from './LargeButton.module.scss';

const LargeButton: FC<IButton> = ({ title }) => {
  return <button className={styled.container}>{title}</button>;
};

export { LargeButton };
