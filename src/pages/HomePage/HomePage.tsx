import { About } from 'components/HomePage/About';
import { Benefits } from 'components/HomePage/Benefits';
import { Certificate } from 'components/HomePage/Certificate';
import { Courses } from 'components/HomePage/Courses';
import { Events } from 'components/HomePage/Events';
import { Header } from 'components/HomePage/Header';
import { Team } from 'components/HomePage/Team';

import styled from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styled.container}>
      <Header />
      <About />
      <Courses />
      <Benefits />
      <Events />
      <Certificate />
      <Team />
    </div>
  );
};

export { HomePage };