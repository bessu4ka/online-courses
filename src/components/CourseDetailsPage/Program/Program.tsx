import { useState } from 'react';

import { program } from 'images/coursePage';
import sprite from 'images/sprite.svg';
import data from './data.json';

import styled from './Program.module.scss';

const Program = (): JSX.Element => {
	const [isOpenedLessonText, setIsOpenedLessonText] = useState<number | null>(null);

	function changeLesson(order: number): void {
		setIsOpenedLessonText(order);
	}

	function closeInformation(): void {
		setIsOpenedLessonText(null);
	}

	return (
		<section className={styled.container}>
			<div className={styled.listWrapper}>
				<h3>Course program</h3>
				<h2>What will you learn</h2>

				<ul>
					{data.map(({ order, title, text }, index) => {
						return (
							<li key={index}>
								<div className={styled.titleWrapper}>
									{isOpenedLessonText === order ? (
										<svg onClick={(): void => closeInformation()}>
											<use href={sprite + '#minus'} />
										</svg>
									) : (
										<svg onClick={(): void => changeLesson(order)}>
											<use href={sprite + '#plus'} />
										</svg>
									)}
									<span onClick={(): void => changeLesson(order)}>Lesson {order}</span>
									<p onClick={(): void => changeLesson(order)}>{title}</p>
								</div>

								<div className={isOpenedLessonText === order ? styled.text : styled.noText}>
									{text}
								</div>
							</li>
						);
					})}
				</ul>
			</div>

			<img src={program} alt="program" />
		</section>
	);
};

export { Program };
