import { About } from 'components/HomePage/About';
import { Courses } from 'components/HomePage/Courses';
import { Header } from 'components/HomePage/Heder';

import styled from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styled.container}>
      <Header />
      <About />
      <Courses />
    </div>
  );
};

export { HomePage };
