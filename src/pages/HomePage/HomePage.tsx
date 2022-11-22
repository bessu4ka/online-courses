import { LargeButton } from 'components/Buttons/LargeButton';
import { OutlineLargeButton } from 'components/Buttons/OutLineLargeButton';
import { PlayAnimateButton } from 'components/Buttons/PlayAnimateButton';
import { headVector } from 'images/homePage';

import styled from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styled.container}>
      <div className={styled.mainInfo}>
        <section className={styled.headWrapper}>
          <div>
            <PlayAnimateButton />
            <h1 className={styled.mainTitle}>
              Enjoy studying with Createx Online Courses
            </h1>
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

        <div className={styled.achievements}>
          <article>
            <p>1200</p>
            <span>Students graduated</span>
          </article>
          <div />

          <article>
            <p>84</p>
            <span>Completed courses</span>
          </article>
          <div />

          <article>
            <p>16</p>
            <span>Qualified tutors</span>
          </article>
          <div />

          <article>
            <p>5</p>
            <span>Years of experience</span>
          </article>
        </div>
      </div>
    </div>
  );
};

export { HomePage };
