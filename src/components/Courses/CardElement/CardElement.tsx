import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from './CardElement.module.scss';

interface IProps {
	photo: string;
	course: string;
	title: string;
	price: string;
	name: string;
	id: number;
}

const CardElement: FC<IProps> = ({ id, photo, course, title, price, name }) => {
	const navigate = useNavigate();

	function goToCourseDetails(id: number): void {
		navigate(`/course-details?id=${id}`);
	}

	return (
		<div className={styled.container} onClick={(): void => goToCourseDetails(id)}>
			<div className={styled.imageWrapper}>
				<div className={styled.circle_1}>
					<div className={styled.circle_2}>
						<div className={styled.circle_3} />
					</div>
				</div>
				<img className={styled.teacher} src={photo} alt="teacher" />
			</div>

			<aside>
				<div className={styled.course}>{course}</div>
				<h4>{title}</h4>
				<div className={styled.info}>
					<p className={styled.price}>${price}</p>
					<p className={styled.name}>| by {name}</p>
				</div>
			</aside>
		</div>
	);
};

export { CardElement };
