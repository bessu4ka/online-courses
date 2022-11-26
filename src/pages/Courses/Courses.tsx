import { CoursesBlock } from 'components/Courses';
import { Certificate } from 'components/HomePage/Certificate';
import { Subscribe } from 'components/HomePage/Subscribe';
import { Testimonials } from 'components/HomePage/Testimonials';

const Courses = () => {
  return (
    <div>
      <CoursesBlock />
      <Testimonials />
      <Certificate />
      <Subscribe />
    </div>
  );
};

export { Courses };
