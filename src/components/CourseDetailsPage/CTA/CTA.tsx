import { RegularButton } from 'components/Buttons/RegularButton';
import styled from './CTA.module.scss';

const CTA = () => {
  return (
    <section className={styled.container}>
      <div className={styled.info}>
        <h3>20% discount for early birds!</h3>
        <div className={styled.time}>
          {/* days */}
          <div className={styled.date}>
            <p>06</p>
            <span>Days</span>
          </div>

          {/* hours */}
          <div className={styled.date}>
            <p>18</p>
            <span>Hours</span>
          </div>

          {/* minutes */}
          <div className={styled.date}>
            <p>24</p>
            <span>Mins</span>
          </div>

          {/* seconds */}
          <div className={styled.date}>
            <p>12</p>
            <span>Sec</span>
          </div>
        </div>
      </div>

      <div className={styled.form}>
        {/* full name */}
        <div className={styled.inputWrapper}>
          <label htmlFor='fullName'>Full name</label>
          <input id='fullName' placeholder='Your full name' type='text' />
        </div>

        {/* email */}
        <div className={styled.inputWrapper}>
          <label htmlFor='email'>Email</label>
          <input id='email' placeholder='Your working email' type='email' />
        </div>

        {/* phone */}
        <div className={styled.inputWrapper}>
          <label htmlFor='phone'>Phone</label>
          <input id='phone' placeholder='Your phone number' type='number' />
        </div>

        {/* btn */}
        <div className={styled.btnWrapper}>
          <RegularButton title='Join the course' />
        </div>
      </div>
    </section>
  );
};

export { CTA };
