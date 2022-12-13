import { LargeButton } from 'components/Buttons/LargeButton';
import { testimonials } from 'images/coursePage';
import data from './data.json';

import styled from './Register.module.scss';

const Register = () => {
  return (
    <section className={styled.container}>
      <img src={testimonials} alt='register vector img' />

      <div className={styled.registerWrapper}>
        <h3>Leave a request now and get 20% off!</h3>
        <h2>Register for the course</h2>

        <ul className={styled.form}>
          {data.map(({ label, id, placeholder, type }) => {
            return (
              <li key={id} className={styled.formWrapper}>
                <label htmlFor={id}>{label}</label>
                <input id={id} type={type} placeholder={placeholder} />
              </li>
            );
          })}

          <div className={styled.btnWrapper}>
            <LargeButton title='Join the course' />
          </div>
        </ul>
      </div>
    </section>
  );
};

export { Register };
