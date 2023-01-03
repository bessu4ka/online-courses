import { FC } from 'react';

import sprite from 'images/sprite.svg';

import styled from './Slide.module.scss';

interface IProps {
	text: string;
	name: string;
	position: string;
	url: string;
}

const Slide: FC<IProps> = ({ text, name, position, url }) => {
	return (
		<div className={styled.container}>
			<div className={styled.content}>
				<svg className={styled.braces}>
					<use href={sprite + '#braces'} />
				</svg>

				<aside>
					<p className={styled.text}>{text}</p>
					<div className={styled.userInfo}>
						<div className={styled.imgWrapper}>
							<img src={url} alt="user" />
						</div>
						<div>
							<p className={styled.name}>{name}</p>
							<p className={styled.position}>{position}</p>
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
};

export { Slide };
