import { LargeButton } from 'components/Buttons/LargeButton';
import { Event } from './Event/Event';
import data from './data.json';

import styled from './Events.module.scss';

const Events = () => {
  return (
    <div className={styled.container}>
      <h3>Our Events</h3>
      <h2>Lectures & workshops</h2>

      <div className={styled.list}>
        {data.map(({ number, month, time, title, format }, index) => {
          return (
            <Event
              key={index}
              number={number}
              month={month}
              time={time}
              title={title}
              format={format}
            />
          );
        })}
      </div>

      <div className={styled.more}>
        <p>Do you want more?</p>
        <div className={styled.btnWrapper}>
          <LargeButton title='Explore all events' />
        </div>
      </div>
    </div>
  );
};

export { Events };
