import { OutlineRegularButton } from 'components/Buttons/OutlineRegularButton';
import { FC } from 'react';

import { EventElement } from 'types/EventElement';

import styled from './ListElement.module.scss';

const ListElement: FC<EventElement> = ({ day, month, time, title, format }) => {
  return (
    <div className={styled.container}>
      <div className={styled.date}>
        <span className={styled.day}>{day}</span>
        <div className={styled.info}>
          <span className={styled.month}>{month}</span>
          <span className={styled.time}>{time}</span>
        </div>
      </div>

      <div className={styled.about}>
        <p className={styled.title}>{title}</p>
        <p className={styled.format}>{format}</p>
      </div>

      <div className={styled.blockWrap}>
        <div className={styled.btnWrapper}>
          <OutlineRegularButton title='View more' />
        </div>
      </div>
    </div>
  );
};

export { ListElement };
