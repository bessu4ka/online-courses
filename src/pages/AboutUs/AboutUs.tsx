import { Info } from 'components/AboutUsPage/Info';
import { Values } from 'components/AboutUsPage/Values';
import { VideoStatistic } from 'components/AboutUsPage/VideoStatistic';

import styled from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <main className={styled.container}>
      <Info />
      <VideoStatistic />
      <Values />
    </main>
  );
};

export { AboutUs };
