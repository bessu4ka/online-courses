import { LargeButton } from 'components/Buttons/LargeButton';
import { testimonials } from 'images/coursePage';

import styled from './Register.module.scss';

const Register = () => {
  return (
    <section className={styled.container}>
      <img src={testimonials} alt='register vector img' />

      <div className={styled.registerWrapper}>
        <h3>Leave a request now and get 20% off!</h3>
        <h2>Register for the course</h2>

        <div className={styled.form}>
          {/* full name */}
          <div className={styled.formWrapper}>
            <label htmlFor='fullName'>Full name</label>
            <input id='fullName' type='text' placeholder='Your full name' />
          </div>

          {/* email */}
          <div className={styled.formWrapper}>
            <label htmlFor='email'>Email</label>
            <input id='email' type='text' placeholder='Your working email' />
          </div>

          {/* phone */}
          <div className={styled.formWrapper}>
            <label htmlFor='phone'>Phone</label>
            <input id='phone' type='number' placeholder='Your phone number' />
          </div>

          {/* btn */}
          <div className={styled.btnWrapper}>
            <LargeButton title='Join the course' />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Register };
