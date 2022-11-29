import sprite from 'images/sprite.svg';

import styled from './ForWhom.module.scss';

const data = [
  'Specialists with more than 1 year of active work experience',
  `Mobile app designers who want to improve their skills in solving 
	business problems, creating and testing human-centered interfaces`,
  'Professional designers who want to feel more confident in UX',
  'Specialists who would like to structure their knowledge, fill in the gaps',
];

const ForWhom = () => {
  return (
    <section className={styled.container}>
      <div>
        <h3>For whom?</h3>
        <h2>Who will benefit from the course:</h2>
      </div>

      <ul>
        {data.map((el, index) => {
          return (
            <li key={index}>
              <div>
                <svg>
                  <use href={sprite + '#about-check'} />
                </svg>
              </div>
              <span>{el}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export { ForWhom };
