import { Event } from './Event/Event';
import styled from './Events.module.scss';

const Events = () => {
  return (
    <div className={styled.container}>
      <h3>Our Events</h3>
      <h2>Lectures & workshops</h2>

      <div style={{ width: '1230px' }}>
			<Event/>
			</div>
    </div>
  );
};

export { Events };
