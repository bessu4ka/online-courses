import { LargeButton } from 'components/Buttons/LargeButton';
import { OutlineLargeButton } from 'components/Buttons/OutLineLargeButton';
import { PlayAnimateButton } from 'components/Buttons/PlayAnimateButton';
import { headVector } from 'images/homePage';

import styled from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styled.container}>
      <section className={styled.headWrapper}>
        <div>
          <PlayAnimateButton />
          <h1 className={styled.mainTitle}>Enjoy studying with Createx Online Courses</h1>
          <div className={styled.buttons}>
            <div className={styled.transparentBtnWrapper}>
              <OutlineLargeButton title='About us' />
            </div>
            <div className={styled.BtnWrapper}>
              <LargeButton title='Explore courses' />
            </div>
          </div>
        </div>

        <img src={headVector} alt='course-vector' />
      </section>
    </div>
  );
};

export { HomePage };
