import { About } from 'components/CourseDetailsPage/About';
import { CTA } from 'components/CourseDetailsPage/CTA';
import { Curator } from 'components/CourseDetailsPage/Curator';
import { ForWhom } from 'components/CourseDetailsPage/ForWhom';
import { PageTitle } from 'components/CourseDetailsPage/PageTitle';
import { Program } from 'components/CourseDetailsPage/Program';
import { Register } from 'components/CourseDetailsPage/Register';
import { RelatedCoursesSwiper } from 'components/CourseDetailsPage/RelatedCoursesSwiper';
import { Steps } from 'components/CourseDetailsPage/Steps';
import { Testimonials } from 'components/HomePage/Testimonials';

import styled from './CourseDetails.module.scss';

const CourseDetails = (): JSX.Element => {
	return (
		<div className={styled.container}>
			<PageTitle />
			<About />
			<Curator />
			<Steps />
			<CTA />
			<ForWhom />
			<Program />
			<Testimonials />
			<Register />
			<RelatedCoursesSwiper />
		</div>
	);
};

export { CourseDetails };
