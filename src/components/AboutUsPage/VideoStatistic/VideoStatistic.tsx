import { statistic } from 'images/aboutUsPage';
import sprite from 'images/sprite.svg';

import styled from './VideoStatistic.module.scss';

const data = [
  { amount: 1200, description: 'students graduated' },
  { amount: 84, description: 'completed courses' },
  { amount: 16, description: 'qualified tutors' },
  { amount: 5, description: 'years of experience' },
];

const VideoStatistic = () => {
  return (
    <section className={styled.container}>
      <div className={styled.content}>
        <div className={styled.btnWrapper}>
          <button className={styled.btn}>
            <svg>
              <use href={sprite + '#play'} />
            </svg>
          </button>

					<span>Watch Video</span>
        </div>

        <div className={styled.info}>
          <img className={styled.image} src={statistic} alt='video screen' />
          <ul>
            {data.map(({ amount, description }, index) => {
              return (
                <li key={index} className={styled.descriptionFields}>
                  <span className={styled.amount}>{amount}</span>
                  <span className={styled.description}>{description}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { VideoStatistic };
