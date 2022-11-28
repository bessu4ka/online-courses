import { About } from 'components/CourseDetailsPage/About';
import { Curator } from 'components/CourseDetailsPage/Curator';
import { PageTitle } from 'components/CourseDetailsPage/PageTitle';
import { Steps } from 'components/CourseDetailsPage/Steps';

import styled from './CourseDetails.module.scss';

const CourseDetails = () => {
  return (
    <main className={styled.container}>
      <PageTitle />
      <About />
      <Curator />
      <Steps />
    </main>
  );
};

export { CourseDetails };
