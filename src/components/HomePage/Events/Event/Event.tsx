import { FC } from 'react';

import { OutlineRegularButton } from 'components/Buttons/OutlineRegularButton';

import styled from './Event.module.scss';

interface IProps {
	number: string;
	month: string;
	time: string;
	title: string;
	format: string;
}

const Event: FC<IProps> = ({ number, month, time, title, format }) => {
	return (
		<div className={styled.container}>
			<article className={styled.dateWrapper}>
				<div className={styled.date}>{number}</div>
				<div className={styled.monthWrapper}>
					<div className={styled.month}>{month}</div>
					<div className={styled.time}>{time}</div>
				</div>
			</article>

			<article className={styled.info}>
				<h5>{title}</h5>
				<p>{format}</p>
			</article>

			<div className={styled.btnWrapper}>
				<OutlineRegularButton title="View more" />
			</div>
		</div>
	);
};

export { Event };
