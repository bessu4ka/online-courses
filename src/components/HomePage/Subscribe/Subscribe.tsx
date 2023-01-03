import { LargeButton } from 'components/Buttons/LargeButton';
import { InputLarge } from 'components/Inputs';

import styled from './Subscribe.module.scss';

const Subscribe = (): JSX.Element => {
	return (
		<div className={styled.container}>
			<h3>Don’t miss anything</h3>
			<h2>Subscribe to the Createx School announcements</h2>

			<div className={styled.form}>
				<InputLarge placeholder="Your working email" />
				<div className={styled.btnWrapper}>
					<LargeButton title="Subscribe" />
				</div>
			</div>
		</div>
	);
};

export { Subscribe };
