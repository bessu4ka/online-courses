import { GridListToggleEvents } from 'components/EventsPage/GridListToggleEvents';
import { Subscribe } from 'components/HomePage/Subscribe';

import styled from './Events.module.scss';

const Events = (): JSX.Element => {
	return (
		<div className={styled.container}>
			<GridListToggleEvents />
			<Subscribe />
		</div>
	);
};

export { Events };
