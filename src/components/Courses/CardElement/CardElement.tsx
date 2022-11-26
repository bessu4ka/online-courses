import { FC } from 'react';

import styled from './CardElement.module.scss';

interface IProps {
  photo: string;
  course: string;
  title: string;
  price: string;
  name: string;
}

const CardElement: FC<IProps> = ({ photo, course, title, price, name }) => {
  return (
    <div className={styled.container}>
      <div className={styled.imageWrapper}>
        <div className={styled.circle_1}>
          <div className={styled.circle_2}>
            <div className={styled.circle_3} />
          </div>
        </div>
        <img className={styled.teacher} src={photo} alt='teacher' />
      </div>

      <aside>
        <div className={styled.course}>{course}</div>
        <h4>{title}</h4>
        <div className={styled.info}>
          <p className={styled.price}>${price}</p>
          <p className={styled.name}>| by {name}</p>
        </div>
      </aside>
    </div>
  );
};

export { CardElement };
