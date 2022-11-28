import { curator } from 'images/coursePage';
import sprite from 'images/sprite.svg';

import styled from './Curator.module.scss';

const Curator = () => {
  return (
    <section className={styled.container}>
      {/* curator photo */}
      <div className={styled.substrate}>
        <img src={curator} alt='' />
      </div>

      {/* curator description/rating */}
      <aside className={styled.descriptionWrapper}>
        <h3>Course curator</h3>
        <h2>Cody Fisher</h2>
        <span className={styled.position}>Senior UX designer in IT Product Company</span>

        <div className={styled.ratingWrapper}>
          <div className={styled.rating}>
            <svg>
              <use href={sprite + '#star'} />
            </svg>
            <span>4.9 rate</span>
          </div>
          <div className={styled.rating}>
            <svg>
              <use href={sprite + '#play-curator'} />
            </svg>
            <span>4 courses</span>
          </div>
          <div className={styled.rating}>
            <svg>
              <use href={sprite + '#person'} />
            </svg>
            <span>350 students</span>
          </div>
        </div>

        <p className={styled.description}>
          Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur
          venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis
          commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur
          vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo
          platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam
          tristique sollicitudin interdum quam.
        </p>

        <div className={styled.socialsWrapper}>
          <svg>
            <use href={sprite + '#facebook'} />
          </svg>

          <svg>
            <use href={sprite + '#behance'} />
          </svg>

          <svg>
            <use href={sprite + '#twitter'} />
          </svg>

          <svg>
            <use href={sprite + '#linked-In'} />
          </svg>
        </div>
      </aside>
    </section>
  );
};

export { Curator };
