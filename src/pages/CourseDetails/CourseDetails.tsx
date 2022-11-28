import { About } from 'components/CourseDetailsPage/About';
import { PageTitle } from 'components/CourseDetailsPage/PageTitle';

import styled from './CourseDetails.module.scss';

const CourseDetails = () => {
  return (
    <main className={styled.container}>
      <PageTitle />
      <About />
    </main>
  );
};

export { CourseDetails };
