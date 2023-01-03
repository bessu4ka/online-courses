import { CoursesBlock } from 'components/Courses';
import { Certificate } from 'components/HomePage/Certificate';
import { Subscribe } from 'components/HomePage/Subscribe';
import { Testimonials } from 'components/HomePage/Testimonials';

import styled from './Courses.module.scss';

const Courses = (): JSX.Element => {
	return (
		<div className={styled.container}>
			<CoursesBlock />
			<Testimonials />
			<Certificate />
			<Subscribe />
		</div>
	);
};

export { Courses };
