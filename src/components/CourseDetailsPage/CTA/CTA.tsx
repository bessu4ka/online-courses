import { RegularButton } from 'components/Buttons/RegularButton';
import data from './data.json';

import styled from './CTA.module.scss';

const CTA = (): JSX.Element => {
	return (
		<section className={styled.container}>
			<div className={styled.info}>
				<h3>20% discount for early birds!</h3>
				<ul className={styled.time}>
					{data.date.map(({ number, text }, index) => {
						return (
							<li key={index} className={styled.date}>
								<p>{number}</p>
								<span>{text}</span>
							</li>
						);
					})}
				</ul>
			</div>

			<ul className={styled.form}>
				{data.input.map(({ label, id, placeholder, type }) => {
					return (
						<li key={id} className={styled.inputWrapper}>
							<label htmlFor={id}>{label}</label>
							<input id={id} placeholder={placeholder} type={type} />
						</li>
					);
				})}
				<div className={styled.btnWrapper}>
					<RegularButton title="Join the course" />
				</div>
			</ul>
		</section>
	);
};

export { CTA };
