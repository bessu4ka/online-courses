import { FC } from 'react';

import styled from './Card.module.scss';

interface IProps {
	url: string;
	name: string;
	price: string;
	direction: string;
	title: string;
}

const Card: FC<IProps> = ({ url, name, price, direction, title }) => {
	return (
		<div className={styled.container}>
			<div className={styled.imgWrapper}>
				<div className={styled.substrate}>
					<div className={styled.circle_1}>
						<div className={styled.circle_2}>
							<div className={styled.circle_3} />
						</div>
					</div>
				</div>
				<img src={url} alt="curator img" />
			</div>
			<div className={styled.info}>
				<div>
					<span className={styled.direction}>{direction}</span>
				</div>
				<div className={styled.title}>{title}</div>
				<div className={styled.nameWrapper}>
					<div className={styled.price}>${price} </div>
					<div className={styled.name}>| by {name}</div>
				</div>
			</div>
		</div>
	);
};

export { Card };
