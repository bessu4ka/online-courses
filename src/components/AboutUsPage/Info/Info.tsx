import { LargeButton } from 'components/Buttons/LargeButton';
import { OutlineLargeButton } from 'components/Buttons/OutLineLargeButton';
import { info } from 'images/aboutUsPage';

import styled from './Info.module.scss';

const title = `Createx Online School is a leader in online studying. We have 
			lots of courses and programs from the main market experts.`;

const text = `We provide relevant approaches to online learning, internships and 
			employment in the largest companies in the country. Our educational programs help 
			you get a new specialty from scratch. During your studies, we will help you find a 
			job. Check the courses and online events that we organise.`;

const Info = (): JSX.Element => {
	return (
		<section className={styled.container}>
			<div className={styled.content}>
				<h3>About us</h3>
				<h2>Createx Online School</h2>
				<p className={styled.title}>{title}</p>
				<p className={styled.text}>{text}</p>

				<div className={styled.buttons}>
					<div className={styled.btnWrapper}>
						<OutlineLargeButton title="Explore events" />
					</div>
					<div className={styled.btnWrapper}>
						<LargeButton title="Browse courses" />
					</div>
				</div>
			</div>

			<img className={styled.image} src={info} alt="women with laptop" />
		</section>
	);
};

export { Info };
