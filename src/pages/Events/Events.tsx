import { GridListToggleEvents } from 'components/EventsPage/GridListToggleEvents';

import styled from './Events.module.scss';

const Events = () => {
  return (
    <main className={styled.container}>
      <GridListToggleEvents />
    </main>
  );
};

export { Events };
