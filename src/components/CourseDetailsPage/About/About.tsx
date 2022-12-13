import { RegularButton } from 'components/Buttons/RegularButton';
import sprite from 'images/sprite.svg';
import data from './data.json';

import styled from './About.module.scss';

const About = () => {
  return (
    <section className={styled.container}>
      <aside className={styled.about}>
        {/* info */}
        <>
          <h2>About the course</h2>
          <p>{data.text}</p>
          <h3>You will learn:</h3>
        </>

        {/* about */}
        {data.list.map((text, index) => {
          return (
            <div key={index} className={styled.list}>
              <svg className={styled.icon}>
                <use href={sprite + '#about-check'} />
              </svg>
              <span>{text}</span>
            </div>
          );
        })}
      </aside>

      {/* list */}
      <div className={styled.advert}>
        {data.course.map(({ title, bold, text }, index) => {
          return (
            <div key={index} className={styled.sectionWrapper}>
              <span className={styled.title}>{title}</span>
              <div className={styled.momentous}>{bold}</div>
              <p className={styled.text}>{text}</p>
            </div>
          );
        })}

        {/* btn */}
        <div className={styled.btnWrapper}>
          <RegularButton title='Join the course' />
        </div>
      </div>
    </section>
  );
};

export { About };
