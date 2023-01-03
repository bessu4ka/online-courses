import data from './data.json';

import styled from './Steps.module.scss';

const Steps = (): JSX.Element => {
	return (
		<section className={styled.container}>
			<h3>Main steps</h3>
			<h2>Online learning process</h2>
			<ul className={styled.steps}>
				{data.map(({ order, title, text }, index) => {
					return (
						<li key={index} className={styled.step}>
							<div className={styled.orderWrapper}>
								<div className={styled.order}>{order}</div>
							</div>
							<div className={styled.title}>{title}</div>
							<div className={styled.text}>{text}</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export { Steps };
