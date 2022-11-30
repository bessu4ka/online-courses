import { img_1, img_2, img_3, img_4, img_5 } from 'images/aboutUsPage';
import sprite from 'images/sprite.svg';

import styled from './Directions.module.scss';

const data = [
  {
    img: img_1,
    direction: 'Marketing',
    text: `Odio posuere netus quisque faucibus lectus arcu donec. 
				Eget dictum eu viverra faucibus. Viverra scelerisque consequat.`,
  },
  {
    img: img_2,
    direction: 'Management',
    text: `Odio posuere netus quisque faucibus lectus arcu donec. 
				Eget dictum eu viverra faucibus. Viverra scelerisque consequat.`,
  },
  {
    img: img_3,
    direction: 'HR & Recruting',
    text: `Odio posuere netus quisque faucibus lectus arcu donec. 
				Eget dictum eu viverra faucibus. Viverra scelerisque consequat.`,
  },
  {
    img: img_4,
    direction: 'Design',
    text: `Odio posuere netus quisque faucibus lectus arcu donec. 
				Eget dictum eu viverra faucibus. Viverra scelerisque consequat.`,
  },
  {
    img: img_5,
    direction: 'Development',
    text: `Odio posuere netus quisque faucibus lectus arcu donec. 
				Eget dictum eu viverra faucibus. Viverra scelerisque consequat.`,
  },
];

const Directions = () => {
  return (
    <section className={styled.container}>
      <h3>our main directions</h3>
      <h2>What do we teach</h2>

      <ul>
        {data.map(({ img, direction, text }, index) => {
          return (
            <li key={index}>
              <img src={img} alt='grid splash screen' />
              <div className={styled.info}>
                <div className={styled.directionWrapper}>
                  <p
                    className={
                      direction === 'Marketing'
                        ? styled.marketing
                        : direction === 'Management'
                        ? styled.management
                        : direction === 'HR & Recruting'
                        ? styled.recruting
                        : direction === 'Design'
                        ? styled.design
                        : styled.development
                    }>
                    {direction}
                  </p>
                </div>

                <p className={styled.text}>{text}</p>

                <div className={styled.btnWrapper}>
                  <span>Check courses</span>
                  <svg>
                    <use href={sprite + '#right'} />
                  </svg>
                </div>
              </div>
            </li>
          );
        })}
        <div className={styled.emptyBlock}>
          <span>New studying program coming soon...</span>
        </div>
      </ul>
    </section>
  );
};

export { Directions };
