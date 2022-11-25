import { FC } from 'react';

import sprite from 'images/sprite.svg';

import styled from './Slide.module.scss';

interface IProps {
  url: string;
  name: string;
  position: string;
}

const Slide: FC<IProps> = ({ url, name, position }) => {
  return (
    <div className={styled.container}>
      <div className={styled.substrate}>
        <img src={url} alt='person' />

        <div className={styled.iconWrapper}>
          {/* facebook */}
          <svg className={styled.icon}>
            <use href={sprite + '#facebook'} />
          </svg>

          {/* instagram */}
          <svg className={styled.icon}>
            <use href={sprite + '#instagram'} />
          </svg>

          {/* linked-in */}
          <svg className={styled.icon}>
            <use href={sprite + '#linked-In'} />
          </svg>
        </div>
      </div>
      <div className={styled.info}>
        <div className={styled.name}>{name}</div>
        <p className={styled.position}>{position}</p>
      </div>
    </div>
  );
};

export { Slide };
