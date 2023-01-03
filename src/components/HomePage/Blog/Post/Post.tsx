import { FC } from 'react';

import sprite from 'images/sprite.svg';

import styled from './Post.module.scss';

interface IProps {
	url: string;
	format: string;
	format_icon: string;
	direction: string;
	date: string;
	time: null | string;
	title: string;
	text: string;
	method: string;
}

const Post: FC<IProps> = ({
	url,
	format,
	format_icon,
	direction,
	date,
	time,
	title,
	text,
	method,
}) => {
	return (
		<div className={styled.container}>
			<div className={styled.posterWrapper}>
				<img src={url} alt="poster" />
				<div className={styled.infoWrapper}>
					<svg className={styled.icon}>
						<use href={sprite + `#${format_icon}`} />
					</svg>
					<p>{format}</p>
				</div>
			</div>

			<div className={styled.iconDateWrapper}>
				<span>{direction}</span>
				<span>|</span>
				<svg className={styled.icon}>
					<use href={sprite + '#calendar'} />
				</svg>
				<span>{date}</span>
				{time && (
					<div className={styled.timeWrapper}>
						<svg className={styled.icon}>
							<use href={sprite + '#clock'} />
						</svg>
						<span>{time} min</span>
					</div>
				)}
			</div>

			<h3>{title}</h3>
			<p>{text}</p>

			<div className={styled.btnWrapper}>
				<p>{method}</p>
				<svg>
					<use href={sprite + '#right'} />
				</svg>
			</div>
		</div>
	);
};

export { Post };
