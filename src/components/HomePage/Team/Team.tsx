import { TeamSwiper } from './TeamSwiper';

import styled from './Team.module.scss';

const Team = (): JSX.Element => {
	return (
		<div className={styled.container}>
			<h3>Best tutors are all here</h3>
			<h2>Meet our team</h2>
			<TeamSwiper />
		</div>
	);
};

export { Team };
