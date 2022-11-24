import { FC } from 'react';

import { IButton } from 'types/Button';

import styled from './OutlineRegularButton.module.scss';

const OutlineRegularButton: FC<IButton> = ({ title }) => {
  return <button className={styled.container}>{title}</button>;
};

export { OutlineRegularButton };
