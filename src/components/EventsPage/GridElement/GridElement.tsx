import { OutlineRegularButton } from 'components/Buttons/OutlineRegularButton';
import { FC } from 'react';

import { EventElement } from 'types/EventElement';

import styled from './GridElement.module.scss';

const GridElement: FC<EventElement> = ({ day, month, time, title, format }) => {
  return (
    <div className={styled.container}>
      <span className={styled.date}>
        {day} {month}
      </span>
      <span className={styled.time}>{time}</span>
      <p className={styled.title}>{title}</p>
      <p className={styled.format}>{format}</p>
      <div className={styled.btnWrapper}>
        <OutlineRegularButton title='View more' />
      </div>
    </div>
  );
};

export { GridElement };
