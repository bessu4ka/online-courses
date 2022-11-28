import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from './Card.module.scss';

interface IProps {
  url: string;
  sphere: string;
  title: string;
  price: string;
  name: string;
  id: number;
}

const Card: FC<IProps> = ({ id, url, sphere, title, price, name }) => {
  const navigate = useNavigate();

  function goToCourseDetails(id: number): void {
    navigate(`/course-details?id=${id}`);
  }

  return (
    <div className={styled.container} onClick={() => goToCourseDetails(id)}>
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
