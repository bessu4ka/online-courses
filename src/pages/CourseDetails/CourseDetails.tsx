import { About } from 'components/CourseDetailsPage/About';
import { CTA } from 'components/CourseDetailsPage/CTA';
import { Curator } from 'components/CourseDetailsPage/Curator';
import { ForWhom } from 'components/CourseDetailsPage/ForWhom';
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
      <CTA />
      <ForWhom />
    </main>
  );
};

export { CourseDetails };
