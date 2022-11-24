import { OutlineRegularButton } from 'components/Buttons/OutlineRegularButton';

import styled from './Event.module.scss';

const Event = () => {
  return (
    <div className={styled.container}>
      <article className={styled.dateWrapper}>
        <div className={styled.date}>05</div>
        <div className={styled.monthWrapper}>
          <div className={styled.month}>August</div>
          <div className={styled.time}>11:00 – 14:00</div>
        </div>
      </article>

      <article className={styled.info}>
        <h5>
          Formation of the organizational structure of the company in the face of
          uncertainty.
        </h5>
        <p>Online master-class</p>
      </article>

      <div className={styled.btnWrapper}>
        <OutlineRegularButton title='View more' />
      </div>
    </div>
  );
};

export { Event };
