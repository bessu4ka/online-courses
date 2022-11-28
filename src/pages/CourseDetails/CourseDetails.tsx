import { PageTitle } from 'components/CourseDetailsPage/PageTitle';

import styled from './CourseDetails.module.scss';

const CourseDetails = () => {
  return (
    <main className={styled.container}>
      <PageTitle />
    </main>
  );
};

export { CourseDetails };
