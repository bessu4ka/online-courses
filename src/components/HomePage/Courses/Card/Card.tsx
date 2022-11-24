import { FC } from 'react';

import styled from './Card.module.scss';

interface IProps {
  url: string;
  sphere: string;
  title: string;
  price: string;
  name: string;
}

const Card: FC<IProps> = ({ url, sphere, title, price, name }) => {
  return (
    <div className={styled.container}>
      <div className={styled.imageWrapper}>
        <div className={styled.imageSubstrate}>
          <div className={styled.circle_1}>
            <div className={styled.circle_2}>
              <div className={styled.circle_3} />
            </div>
          </div>
        </div>
        <img className={styled.image} src={url} alt='person' />
      </div>

      <div className={styled.info}>
        <div>{sphere}</div>
        <h3>{title}</h3>
        <p>
          ${price} <span>| by {name}</span>
        </p>
      </div>
    </div>
  );
};

export { Card };
