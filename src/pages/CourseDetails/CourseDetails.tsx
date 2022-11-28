import { About } from 'components/CourseDetailsPage/About';
import { Curator } from 'components/CourseDetailsPage/Curator';
import { PageTitle } from 'components/CourseDetailsPage/PageTitle';

import styled from './CourseDetails.module.scss';

const CourseDetails = () => {
  return (
    <main className={styled.container}>
      <PageTitle />
      <About />
      <Curator />
    </main>
  );
};

export { CourseDetails };
