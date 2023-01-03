import { curator } from 'images/coursePage';
import sprite from 'images/sprite.svg';
import data from './data.json';

import styled from './Curator.module.scss';

const Curator = (): JSX.Element => {
	return (
		<section className={styled.container}>
			{/* curator photo */}
			<div className={styled.substrate}>
				<img src={curator} alt="" />
			</div>

			{/* curator description/rating */}
			<aside className={styled.descriptionWrapper}>
				<h3>Course curator</h3>
				<h2>Cody Fisher</h2>
				<span className={styled.position}>{data.position}</span>

				<ul className={styled.ratingWrapper}>
					{data.indicators.map(({ icon, text }, index) => {
						return (
							<li key={index} className={styled.rating}>
								<svg>
									<use href={sprite + `#${icon}`} />
								</svg>
								<span>{text}</span>
							</li>
						);
					})}
				</ul>

				<p className={styled.description}>{data.description}</p>

				<div className={styled.socialsWrapper}>
					{data.socials.map((icon, index) => {
						return (
							<svg key={index}>
								<use href={sprite + `#${icon}`} />
							</svg>
						);
					})}
				</div>
			</aside>
		</section>
	);
};

export { Curator };
