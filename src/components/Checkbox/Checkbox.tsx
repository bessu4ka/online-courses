import { useState } from 'react';

import sprite from 'images/sprite.svg';

import styled from './Checkbox.module.scss';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      {isChecked ? (
        <div className={styled.checked} onClick={() => setIsChecked((prev) => !prev)}>
          <svg>
            <use href={sprite + '#check'}></use>
          </svg>
        </div>
      ) : (
        <div
          className={styled.notChecked}
          onClick={() => setIsChecked((prev) => !prev)}
        />
      )}
    </>
  );
};

export { Checkbox };
