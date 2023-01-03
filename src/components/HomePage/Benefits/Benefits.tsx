import { useState } from 'react';

import sprite from 'images/sprite.svg';
import { benefits } from 'images/homePage';

import styled from './Benefits.module.scss';

const data = [
	{ icon: '#star', title: 'Experienced Tutors' },
	{ icon: '#like', title: 'Feedback & Support' },
	{ icon: '#layouts', title: '24/7 Online Library' },
	{ icon: '#chat', title: 'Community' },
];

const text = `Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum
							suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc,
							sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum.
							Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus
							vehicula.`;

const Benefits = (): JSX.Element => {
	const [activeTab, setActiveTab] = useState(0);

	function changeActiveTab(index: number): void {
		setActiveTab(index);
	}

	return (
		<div className={styled.container}>
			<h3>Our benefits</h3>
			<h2>That’s how we do it</h2>

			<nav>
				{data.map(({ icon, title }, index) => {
					return (
						<div
							key={index}
							className={activeTab === index ? styled.activeTab : null}
							onClick={(): void => changeActiveTab(index)}
						>
							<svg className={activeTab === index ? styled.activeIcon : styled.icon}>
								<use href={sprite + icon} />
							</svg>
							<span className={activeTab === index ? styled.activeTitle : styled.title}>
								{title}
							</span>
						</div>
					);
				})}
			</nav>

			<aside>
				<div>
					<h4>Only practicing tutors</h4>
					<p>{text}</p>
				</div>

				<img src={benefits} alt="benefits" />
			</aside>
		</div>
	);
};

export { Benefits };
