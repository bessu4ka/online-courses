import { useState } from 'react';

import { LargeButton } from 'components/Buttons/LargeButton';
import { Checkbox } from 'components/Checkbox';
import { subscribe } from 'images/BlogPage';

import styled from './Subscribe.module.scss';

const title = `Want to get the best articles weekly?
			Subscribe to our newsletter!`;
const agreement = `I agree to receive communications 
			from Createx Online School`;

const Subscribe = () => {
  const [checked, setChecked] = useState(false);

  return (
    <section className={styled.container}>
      <img src={subscribe} alt='bookshelf' />

      <div className={styled.info}>
        <h4 className={styled.title}>{title}</h4>

        <div className={styled.formWrapper}>
          <div className={styled.inputWrapper}>
            <input type='text' placeholder='Your working email' />
            <div className={styled.btnWrapper}>
              <LargeButton title='Subscribe' />
            </div>
          </div>
        </div>

        <div
          onClick={() => setChecked((prev) => !prev)}
          className={styled.checkboxWrapper}>
          <Checkbox checked={checked} />
          <span>{agreement}</span>
        </div>
      </div>
    </section>
  );
};

export { Subscribe };
