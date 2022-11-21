import { FC } from 'react';

import { IButton } from 'types/Button';

import styled from './OutlineLargeButton.module.scss';

const OutlineLargeButton: FC<IButton> = ({ title }) => {
  return <button className={styled.container}>{title}</button>;
};

export { OutlineLargeButton };
