import { useNavigate } from 'react-router-dom';

import { LargeButton } from 'components/Buttons/LargeButton';

import styled from './EmptyPage.module.scss';

const EmptyPage = (): JSX.Element => {
	const navigate = useNavigate();

	return (
		<div className={styled.container}>
			<p>page not found</p>
			<div className={styled.btnWrapper} onClick={(): void => navigate(-1)}>
				<LargeButton title="Go back" />
			</div>
		</div>
	);
};

export { EmptyPage };
