import { GridListToggleEvents } from 'components/EventsPage/GridListToggleEvents';
import { Subscribe } from 'components/HomePage/Subscribe';

import styled from './Events.module.scss';

const Events = () => {
  return (
    <main className={styled.container}>
      <GridListToggleEvents />
      <Subscribe />
    </main>
  );
};

export { Events };
