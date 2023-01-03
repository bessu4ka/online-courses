import { studying } from 'images/aboutUsPage';

import styled from './StudyingProcess.module.scss';

const data = [
	{
		step: 'STEP 1',
		title: 'Watching online video lectures',
		text: `Aliquam turpis viverra quam sit interdum blandit 
				posuere pellentesque. Nisl, imperdiet gravida massa neque.`,
	},
	{
		step: 'STEP 2',
		title: 'Passing test',
		text: `Facilisis pellentesque quis accumsan ultricies. Eu egestas 
				eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. `,
	},
	{
		step: 'STEP 3',
		title: 'Curator’s feedback',
		text: `Eget amet, enim pharetra leo egestas nisi, odio imperdiet 
				facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. `,
	},
	{
		step: 'STEP 4',
		title: 'Corrections if needed',
		text: `Non tempor pulvinar tincidunt aliquam. Placerat ultricies 
				malesuada dui auctor.`,
	},
];

const StudyingProcess = (): JSX.Element => {
	return (
		<section className={styled.container}>
			<div>
				<h3>Studying process</h3>
				<h2>That’s how we do it</h2>

				<ul className={styled.steps}>
					{data.map(({ step, title, text }, index) => {
						return (
							<li key={index}>
								<div className={styled.stepWrapper}>
									<div className={styled.circle} />
									<span className={styled.step}>{step}</span>
								</div>
								<div className={styled.info}>
									<span className={styled.title}>{title}</span>
									<p className={styled.text}>{text}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>

			<img className={styled.image} src={studying} alt="girl with a diploma" />
		</section>
	);
};

export { StudyingProcess };
