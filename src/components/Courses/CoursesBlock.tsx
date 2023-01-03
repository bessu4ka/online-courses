import { useRef, useState } from 'react';

import { CardElement } from './CardElement';
import { courses_1, courses_2, courses_3, courses_4 } from 'images/homePage';
import sprite from 'images/sprite.svg';

import styled from './CoursesBlock.module.scss';

const tabs = [
	{ title: 'All', count: 17 },
	{ title: 'Marketing', count: 4 },
	{ title: 'Management', count: 3 },
	{ title: 'HR & Recruting', count: 5 },
	{ title: 'Design', count: 2 },
	{ title: 'Development', count: 3 },
];

const cardData = [
	{
		id: 1,
		photo: courses_1,
		course: 'Marketing',
		title: 'Brand Management & PR Communications',
		price: '530',
		name: 'Kristin Watson',
	},
	{
		id: 2,
		photo: courses_2,
		course: 'Design',
		title: 'Graphic Design Basic',
		price: '500',
		name: 'Guy Hawkins',
	},
	{
		id: 3,
		photo: courses_3,
		course: 'Management',
		title: 'Business Development Management',
		price: '400',
		name: 'Dianne Russell',
	},
	{
		id: 4,
		photo: courses_4,
		course: 'Development',
		title: 'Highroad Software Architecture',
		price: '600',
		name: 'Brooklyn Simmons',
	},
	{
		id: 5,
		photo: courses_1,
		course: 'HR & Recruting',
		title: 'Human Resources – Selection and Recruitment',
		price: '150',
		name: 'Kathryn Murphy',
	},
	{
		id: 6,
		photo: courses_2,
		course: 'Marketing',
		title: 'Brand Management & PR Communications',
		price: '530',
		name: 'Kristin Watson',
	},
	{
		id: 7,
		photo: courses_3,
		course: 'Design',
		title: 'User Experience. Human-centered Design',
		price: '240',
		name: ' Cody Fisher',
	},
	{
		id: 8,
		photo: courses_4,
		course: 'Marketing',
		title: 'Brand Management & PR Communications',
		price: '530',
		name: 'Kristin Watson',
	},
	{
		id: 9,
		photo: courses_1,
		course: 'Marketing',
		title: 'Brand Management & PR Communications',
		price: '530',
		name: 'Kristin Watson',
	},
];

const CoursesBlock = (): JSX.Element => {
	const [currentTab, setCurrentTab] = useState(0);
	const inputRef = useRef<HTMLInputElement | null>(null);

	function setFocus(): void {
		inputRef.current && inputRef.current.focus();
	}

	function changeTab(index: number): void {
		setCurrentTab(index);
	}

	return (
		<div className={styled.container}>
			<h3>Enjoy your studying!</h3>
			<h2>Our online courses</h2>

			<aside className={styled.menu}>
				<div className={styled.tabsWrapper}>
					{tabs.map(({ title, count }, index) => {
						return (
							<div
								key={index}
								onClick={(): void => changeTab(index)}
								className={currentTab === index ? styled.activeTab : styled.tab}
							>
								<p>{title}</p>
								<span>{count}</span>
							</div>
						);
					})}
				</div>

				<div className={styled.inputWrapper}>
					<input type="text" placeholder="Search course..." ref={inputRef} />
					<svg onClick={setFocus}>
						<use href={sprite + '#search'} />
					</svg>
				</div>
			</aside>

			<ul>
				{cardData.map(({ id, photo, course, title, price, name }, index) => {
					return (
						<CardElement
							id={id}
							key={index}
							photo={photo}
							course={course}
							title={title}
							price={price}
							name={name}
						/>
					);
				})}
			</ul>

			<div className={styled.more}>
				<svg>
					<use href={sprite + '#convert'} />
				</svg>
				<p>Load more</p>
			</div>
		</div>
	);
};

export { CoursesBlock };
