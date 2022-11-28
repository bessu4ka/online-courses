import { RegularButton } from 'components/Buttons/RegularButton';
import sprite from 'images/sprite.svg';

import styled from './About.module.scss';

const data = [
  'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
  'Vulputate placerat amet pulvinar lorem nisl.',
  'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
  'Etiam duis lobortis in fames ultrices commodo nibh.',
  'Fringilla in nec risus congue venenatis pretium posuere nec.',
  'Cursus eu pretium, vulputate tempus quam massa sed at.',
];

const About = () => {
  return (
    <section className={styled.container}>
      <aside className={styled.about}>
        <h2>About the course</h2>
        <p>
          Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean
          congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in
          faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada
          diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas
          molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem
          risus nunc tincidunt tortor, mi nulla pellentesque
        </p>
        <h3>You will learn:</h3>
        {data.map((text, index) => {
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

      <aside className={styled.advert}>
        {/* dates */}
        <div className={styled.sectionWrapper}>
          <span className={styled.title}>Dates</span>
          <div className={styled.momentous}>Sept 7 – Nov 2</div>
          <p className={styled.text}>
            Metus turpis sit lorem lacus, in elit tellus lacus.
          </p>
        </div>

        {/* duration */}
        <div className={styled.sectionWrapper}>
          <span className={styled.title}>Duration</span>
          <div className={styled.momentous}>2 months – 8 lessons</div>
          <p className={styled.text}>
            Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.
          </p>
        </div>

        {/* price */}
        <div className={styled.sectionWrapper}>
          <span className={styled.title}>Price</span>
          <div className={styled.momentous}>$120 per month</div>
          <p className={styled.text}>
            Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac
            elit tristique dis.
          </p>
        </div>

        {/* btn */}
        <div className={styled.btnWrapper}>
          <RegularButton title='Join the course' />
        </div>
      </aside>
    </section>
  );
};

export { About };
