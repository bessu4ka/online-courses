import { Info } from 'components/AboutUsPage/Info';
import { VideoStatistic } from 'components/AboutUsPage/VideoStatistic';

import styled from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <main className={styled.container}>
      <Info />
      <VideoStatistic />
    </main>
  );
};

export { AboutUs };
