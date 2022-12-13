import sprite from 'images/sprite.svg';
import data from './data.json';

import styled from './ForWhom.module.scss';

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
