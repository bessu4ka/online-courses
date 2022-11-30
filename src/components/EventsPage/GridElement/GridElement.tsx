import { FC } from 'react';

import { EventElement } from 'types/EventElement';

import styled from './GridElement.module.scss';

const GridElement: FC<EventElement> = ({ day, month, time, title, format }) => {
  return <div className={styled.container}>grid</div>;
};

export { GridElement };
