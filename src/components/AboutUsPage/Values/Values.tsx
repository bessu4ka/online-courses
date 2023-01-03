import sprite from 'images/sprite.svg';

import styled from './Values.module.scss';

const data = [
	{
		icon: 'ic-chat',
		title: 'Structured Approach',
		text: 'Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. ',
	},
	{
		icon: 'ic-calendar',
		title: 'Professional Feedbacks',
		text: 'Culpa nostrud commodo ea consequat reprehenderit aliquip. ',
	},
	{
		icon: 'ic-structure',
		title: 'Efficiency',
		text: 'Viverra scelerisque consequat net. Adipisicing esse consequat. ',
	},
	{
		icon: 'ic-target',
		title: 'Flexible Schedule',
		text: 'Aute eiusmod dolore dolore deserunt veniam ad deserunt. ',
	},
];

const Values = (): JSX.Element => {
	return (
		<section className={styled.container}>
			<h3>We always stand for</h3>
			<h2>Our core values</h2>

			<ul>
				{data.map(({ icon, title, text }, index) => {
					return (
						<li key={index}>
							<svg>
								<use href={sprite + `#${icon}`} />
							</svg>
							<p className={styled.title}>{title}</p>
							<p className={styled.text}>{text}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export { Values };
