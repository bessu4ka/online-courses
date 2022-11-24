import { RegularButton } from 'components/Buttons/RegularButton';
import { about } from 'images/homePage';
import sprite from 'images/sprite.svg';

import styled from './About.module.scss';

const data = [
  'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
  'Vulputate placerat amet pulvinar lorem nisl.',
  'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
  'Etiam duis lobortis in fames ultrices commodo.',
  'Tincidunt sagittis neque sem ac eget.',
  'Ultricies amet justo et eget quisque purus vulputate dapibus tortor.',
];

const About = () => {
  return (
    <div className={styled.container}>
      <img src={about} alt='about' />

      <aside>
        <h3>Who we are</h3>
        <h2>Why Createx?</h2>

        <article className={styled.ListWrapper}>
          {data.map((el, index) => {
            return (
              <div key={index} className={styled.ListElement}>
                <svg className={styled.icon}>
                  <use href={sprite + '#about-check'} />
                </svg>
                <p>{el}</p>
              </div>
            );
          })}

          <div className={styled.btnWrapper}>
            <RegularButton title='More about us' />
          </div>
        </article>
      </aside>
    </div>
  );
};

export { About };
