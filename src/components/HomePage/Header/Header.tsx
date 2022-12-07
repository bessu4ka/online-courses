import { Fragment } from 'react';

import { LargeButton } from 'components/Buttons/LargeButton';
import { OutlineLargeButton } from 'components/Buttons/OutLineLargeButton';
import { PlayAnimateButton } from 'components/Buttons/PlayAnimateButton';
import { headVector } from 'images/homePage';

import styled from './Header.module.scss';

const data = [
  { amount: 1200, text: 'Students graduated' },
  { amount: 84, text: 'Completed courses' },
  { amount: 16, text: 'Qualified tutors' },
  { amount: 5, text: 'Years of experience' },
];

const Header = () => {
  return (
    <div className={styled.container}>
      <div className={styled.content}>
        <section className={styled.headWrapper}>
          <div>
            <div className={styled.animateBtnWrapper}>
              <PlayAnimateButton />
            </div>
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
          {data.map(({ amount, text }, index) => {
            return (
              <Fragment key={index}>
                <article>
                  <p>{amount}</p>
                  <span>{text}</span>
                </article>
                <div />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Header };
