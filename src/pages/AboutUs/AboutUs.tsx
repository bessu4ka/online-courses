import { Directions } from 'components/AboutUsPage/Directions';
import { Info } from 'components/AboutUsPage/Info';
import { StudyingProcess } from 'components/AboutUsPage/StudyingProcess';
import { Team } from 'components/AboutUsPage/Team';
import { Values } from 'components/AboutUsPage/Values';
import { VideoStatistic } from 'components/AboutUsPage/VideoStatistic';
import { Blog } from 'components/HomePage/Blog';
import { Subscribe } from 'components/HomePage/Subscribe';
import { Testimonials } from 'components/HomePage/Testimonials';

import styled from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={styled.container}>
      <Info />
      <VideoStatistic />
      <Values />
      <Directions />
      {/* <StudyingProcess /> */}
      {/* <Team /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      {/* <Subscribe /> */}
    </div>
  );
};

export { AboutUs };
