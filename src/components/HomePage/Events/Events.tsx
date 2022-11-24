import { LargeButton } from 'components/Buttons/LargeButton';
import { Event } from './Event/Event';

import styled from './Events.module.scss';

const data = [
  {
    number: '05',
    month: 'August',
    time: '11:00 – 14:00',
    title:
      'Formation of the organizational structure of the company in the face of uncertainty.',
    format: 'Online master-class',
  },
  {
    number: '24',
    month: 'July',
    time: '11:00 – 12:30',
    title: 'Building a customer service department. Best Practices.',
    format: 'Online lecture',
  },
  {
    number: '16',
    month: 'July',
    time: '10:00 – 13:00',
    title:
      'How to apply methods of speculative design in practice. World building prototyping.',
    format: 'Online workshop',
  },
];
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
