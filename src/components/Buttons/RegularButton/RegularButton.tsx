import { FC } from 'react';

import { IButton } from 'types/Button';

import styled from './RegularButton.module.scss';

const RegularButton: FC<IButton> = ({ title }) => {
  return <button className={styled.container}>{title}</button>;
};

export { RegularButton };
