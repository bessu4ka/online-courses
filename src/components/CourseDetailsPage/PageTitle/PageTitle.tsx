import styled from './PageTitle.module.scss';

const PageTitle = (): JSX.Element => {
	return (
		<section className={styled.container}>
			<h4>course</h4>
			<h1>User Experience. Principles of Human-Centered Design</h1>
		</section>
	);
};

export { PageTitle };
