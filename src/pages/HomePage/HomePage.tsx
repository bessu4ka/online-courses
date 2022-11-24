import { About } from 'components/HomePage/About';
import { Benefits } from 'components/HomePage/Benefits';
import { Courses } from 'components/HomePage/Courses';
import { Events } from 'components/HomePage/Events';
import { Header } from 'components/HomePage/Heder';

import styled from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styled.container}>
      <Header />
      <About />
      <Courses />
      <Benefits />
      <Events />
    </div>
  );
};

export { HomePage };
