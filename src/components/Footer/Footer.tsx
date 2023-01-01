import sprite from 'images/sprite.svg';
import { footerLinks } from 'utils/routes';

import styled from './Footer.module.scss';

const text = `
		Createx Online School is a leader in online studying. We have lots of courses
		and programs from the main market experts. We provide relevant approaches to
		online learning, internships and employment in the largest companies in the
		country.
`;

const Footer = () => {
  return (
    <footer className={styled.container}>
      <div className={styled.contentWrapper}>
        <article className={styled.logoInfoWrapper}>
          <svg className={styled.logo}>
            <use href={sprite + '#logo-invert'}></use>
          </svg>
          <p className={styled.text}>{text}</p>

          <ul className={styled.icons}>
            {footerLinks.socials.map((el, index) => {
              return (
                <li key={index}>
                  <svg className={styled.icon}>
                    <use href={sprite + `#${el}`}></use>
                  </svg>
                </li>
              );
            })}
          </ul>
        </article>

        <article className={`${styled.list} ${styled.hidden}`}>
          <h4>SITE MAP</h4>

          <ul>
            {footerLinks.siteMap.map((el, index) => {
              return (
                <li key={index} className={styled.item}>
                  {el}
                </li>
              );
            })}
          </ul>
        </article>

        <article className={`${styled.list} ${styled.hidden}`}>
          <h4>COURSES</h4>
          <ul>
            {footerLinks.courses.map((el, index) => {
              return (
                <li key={index} className={styled.item}>
                  {el}
                </li>
              );
            })}
          </ul>
        </article>

        <article className={styled.list}>
          <h4>CONTACT US</h4>

          <div className={styled.contactWrapper}>
            <svg className={styled.contactIcon}>
              <use href={sprite + '#iPhone'} />
            </svg>
            <a href='tel:4055550128' className={styled.item}>
              (405) 555-0128
            </a>
          </div>

          <div className={styled.contactWrapper}>
            <svg className={styled.contactIcon}>
              <use href={sprite + '#mail'} />
            </svg>
            <p className={styled.item}>hello@createx.com</p>
          </div>
        </article>

        <article className={styled.list}>
          <h4>SIGN UP TO OUR NEWSLETTER</h4>
          <div className={styled.inputWrapper}>
            <input type='text' placeholder='Email address' />
            <svg className={styled.arrow}>
              <use href={sprite + '#right'} />
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
