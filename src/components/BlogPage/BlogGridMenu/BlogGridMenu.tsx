import { useState } from 'react';

import { Pagination } from 'components/Pagination';
import sprite from 'images/sprite.svg';
import { image_1, image_2, image_3, image_5, image_6, image_7 } from 'images/BlogPage';

import styled from './BlogGridMenu.module.scss';

const dataTabs = [
	{ title: 'All', svg: null },
	{ title: 'Articles', svg: 'files' },
	{ title: 'Videos', svg: 'play-blog' },
	{ title: 'Podcasts', svg: 'micro' },
];

const dataSlides = [
	{
		img: image_1,
		format: 'Podcast',
		iconDirection: 'micro',
		direction: 'Marketing',
		date: 'September 4, 2020',
		time: 36,
		title: `What is traffic arbitrage and does it really make money?`,
		text: `Pharetra, ullamcorper iaculis viverra parturient sed id sed.
					Convallis proin dignissim lacus, purus gravida...`,
		method: 'Listen',
	},
	{
		img: image_2,
		format: 'Article',
		iconDirection: 'files',
		direction: 'Development',
		date: 'September 1, 2020',
		time: null,
		title: `How to choose the first programming language for a beginner`,
		text: `Turpis sed at magna laoreet gravida consequat tortor placerat.
					Gravida vitae aliquet enim egestas dui...`,
		method: 'Read',
	},
	{
		img: image_3,
		format: 'Video',
		iconDirection: 'play-blog',
		direction: 'Design',
		date: 'August 8, 2020',
		time: 40,
		title: `Should you choose a creative profession if you are attracted to creativity?`,
		text: `Curabitur nisl tincidunt eros venenatis vestibulum ac placerat.
					Tortor, viverra sed vulputate ultrices...`,
		method: 'Watch',
	},
	{
		img: image_1,
		format: 'Video',
		iconDirection: 'play-blog',
		direction: 'Management',
		date: 'August 2, 2020',
		time: 45,
		title: `What to do and who to talk to if you want to get feedback on the product`,
		text: `Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna
					urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis...`,
		method: 'Watch',
	},
	{
		img: image_5,
		format: 'Podcast',
		iconDirection: 'micro',
		direction: 'Design',
		date: 'July 28, 2020',
		time: 36,
		title: `What are color profiles and how they work in graphic design`,
		text: `Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. 
					Consectetur urna arcu eleifend...`,
		method: 'Listen',
	},
	{
		img: image_6,
		format: 'Video',
		iconDirection: 'play-blog',
		direction: 'Management',
		date: 'July 15, 2020',
		time: 45,
		title: `Startup: how to build a team that will live longer than a year`,
		text: `Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo 
					scelerisque in nisi, urna...`,
		method: 'Watch',
	},
	{
		img: image_7,
		format: 'Article',
		iconDirection: 'files',
		direction: 'Marketing',
		date: 'July 9, 2020',
		time: null,
		title: `How to get customers to love your business from the start`,
		text: `Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus,
					pellentesque etiam arcu tristique ac...`,
		method: 'Read',
	},
	{
		img: image_2,
		format: 'Video',
		iconDirection: 'play-blog',
		direction: 'Marketing',
		date: 'July 9, 2020',
		time: 29,
		title: `How to get customers to love your business from the start`,
		text: `Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus,
					pellentesque etiam arcu tristique ac...`,
		method: 'Watch',
	},
	{
		img: image_3,
		format: 'Podcast',
		iconDirection: 'micro',
		direction: 'Marketing',
		date: 'July 9, 2020',
		time: 40,
		title: `How to get customers to love your business from the start`,
		text: `Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus,
					pellentesque etiam arcu tristique ac...`,
		method: 'Listen',
	},
];

const BlogGridMenu = (): JSX.Element => {
	const [activeTab, setActiveTab] = useState(0);

	function toggleActiveTab(index: number): void {
		setActiveTab(index);
	}

	return (
		<section className={styled.container}>
			<h3>Our blog</h3>
			<h2>Createx School Journal</h2>

			{/* menu-start */}
			<div className={styled.menu}>
				<nav>
					{dataTabs.map(({ title, svg }, index) => {
						return (
							<button
								key={index}
								className={activeTab === index ? styled.activeTab : styled.tab}
								onClick={(): void => toggleActiveTab(index)}
							>
								<span>{title}</span>
								{svg && (
									<svg>
										<use href={sprite + `#${svg}`} />
									</svg>
								)}
							</button>
						);
					})}
				</nav>

				<div className={styled.selectWrapper}>
					<div className={styled.category}>
						<span>Blog category</span>
						<select name="" id="category">
							<option value="all themes">all themes</option>
						</select>
					</div>
					<input type="search" placeholder="Search blog..." />
				</div>
			</div>
			{/* menu-finish */}

			{/* grid-element-start */}
			<ul>
				{dataSlides.map(
					({ img, format, iconDirection, direction, date, time, title, text, method }, index) => {
						return (
							<li key={index}>
								<div className={styled.imgWrapper}>
									<img src={img} alt="background" />

									<div className={styled.iconDirectionWrapper}>
										<svg>
											<use href={sprite + `#${iconDirection}`} />
										</svg>
										<span>{format}</span>
									</div>
								</div>

								<div className={styled.info}>
									<span>{direction}</span>
									<span>|</span>
									<svg>
										<use href={sprite + '#calendar'} />
									</svg>
									<span>{date}</span>
									{time && <span>|</span>}
									{time && (
										<svg>
											<use href={sprite + '#clock'} />
										</svg>
									)}
									{time && <span>{time} min</span>}
								</div>

								<span className={styled.title}>{title}</span>

								<span className={styled.text}>{text}</span>

								<div className={styled.method}>
									<span>{method}</span>
									<svg>
										<use href={sprite + '#right'} />
									</svg>
								</div>
							</li>
						);
					},
				)}
			</ul>
			{/* grid-element-finish */}

			<Pagination />
		</section>
	);
};

export { BlogGridMenu };
