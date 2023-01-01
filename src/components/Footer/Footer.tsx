import styled from './Footer.module.scss';

import sprite from 'images/sprite.svg';

const Footer = () => {
  return (
    <footer className={styled.container}>
      <div className={styled.contentWrapper}>
        <article className={styled.logoInfoWrapper}>
          <svg className={styled.logo}>
            <use href={sprite + '#logo-invert'}></use>
          </svg>
          <p className={styled.text}>
            Createx Online School is a leader in online studying. We have lots of courses
            and programs from the main market experts. We provide relevant approaches to
            online learning, internships and employment in the largest companies in the
            country.
          </p>
          <div className={styled.icons}>
            <svg className={styled.icon}>
              <use href={sprite + '#facebook'}></use>
            </svg>
            <svg className={styled.icon}>
              <use href={sprite + '#twitter'}></use>
            </svg>
            <svg className={styled.icon}>
              <use href={sprite + '#youtube'}></use>
            </svg>
            <svg className={styled.icon}>
              <use href={sprite + '#telegram'}></use>
            </svg>
            <svg className={styled.icon}>
              <use href={sprite + '#instagram'}></use>
            </svg>
            <svg className={styled.icon}>
              <use href={sprite + '#linked-In'}></use>
            </svg>
          </div>
        </article>

        <article className={`${styled.list} ${styled.hidden}`}>
          <h4>SITE MAP</h4>
          <p className={styled.item}>About Us</p>
          <p className={styled.item}>Courses</p>
          <p className={styled.item}>Events</p>
          <p className={styled.item}>Blog</p>
          <p className={styled.item}>Contacts</p>
        </article>

        <article className={`${styled.list} ${styled.hidden}`}>
          <h4>COURSES</h4>
          <p className={styled.item}>Marketing</p>
          <p className={styled.item}>Management</p>
          <p className={styled.item}>HR & Recruting</p>
          <p className={styled.item}>Design</p>
          <p className={styled.item}>Development</p>
        </article>

        <article className={styled.list}>
          <h4>CONTACT US</h4>

          <div className={styled.contactWrapper}>
            <svg className={styled.contactIcon}>
              <use href={sprite + '#iPhone'}></use>
            </svg>
            <a href='tel:4055550128' className={styled.item}>
              (405) 555-0128
            </a>
          </div>

          <div className={styled.contactWrapper}>
            <svg className={styled.contactIcon}>
              <use href={sprite + '#mail'}></use>
            </svg>
            <p className={styled.item}>hello@createx.com</p>
          </div>
        </article>

        <article className={styled.list}>
          <h4>SIGN UP TO OUR NEWSLETTER</h4>
          <div className={styled.inputWrapper}>
            <input type='text' placeholder='Email address' />
            <svg className={styled.arrow}>
              <use href={sprite + '#right'}></use>
            </svg>
          </div>
          <p className={styled.description}>
            *Subscribe to our newsletter to receive communications and early updates from
            Createx SEO Agency.
          </p>
        </article>
      </div>
    </footer>
  );
};

export { Footer };
