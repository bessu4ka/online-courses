import { useJsApiLoader } from '@react-google-maps/api';

import { Loader } from 'components/Loader';
import { Map } from './Map';
import sprite from 'images/sprite.svg';

import styled from './ContactMap.module.scss';

const APP_API = process.env.REACT_APP_API_KEY;

// Kyiv
const center = {
  lat: 50.45466,
  lng: 30.5238,
};

const ContactMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: APP_API!,
  });
  return (
    <div className={styled.container}>
      <aside className={styled.contacts}>
        <h3>Contact info</h3>
        <h2>Get in touch</h2>

        {/* contacts */}
        <div className={styled.contactsData}>
          <div className={styled.contactWrapper}>
            <svg className={styled.contactsIcon}>
              <use href={sprite + '#chat'} />
            </svg>
            <article>
              <p className={styled.fieldName}>Talk to us:</p>
              <p className={styled.field}>hello@createx.com</p>
            </article>
          </div>

          <div className={styled.contactWrapper}>
            <svg className={styled.contactsIcon}>
              <use href={sprite + '#phone'} />
            </svg>
            <article>
              <p className={styled.fieldName}>Call us:</p>
              <p className={styled.field}>(405) 555-0128</p>
            </article>
          </div>

          <div className={styled.contactWrapper}>
            <svg className={styled.contactsIcon}>
              <use href={sprite + '#outline'} />
            </svg>
            <article>
              <p className={styled.fieldName}>Address:</p>
              <p className={styled.field}>2464 Royal Ln. Mesa, New Jersey 45463, USA</p>
            </article>
          </div>
        </div>

        {/* follow us */}
        <div className={styled.socialsData}>
          <p className={styled.followUs}>Follow us:</p>

          {/* socials-icons */}
          <div className={styled.socialsIconWrapper}>
            <svg className={styled.icon}>
              <use href={sprite + '#facebook'} />
            </svg>

            <svg className={styled.icon}>
              <use href={sprite + '#twitter'} />
            </svg>

            <svg className={styled.icon}>
              <use href={sprite + '#youtube'} />
            </svg>

            <svg className={styled.icon}>
              <use href={sprite + '#telegram'} />
            </svg>

            <svg className={styled.icon}>
              <use href={sprite + '#instagram'} />
            </svg>

            <svg className={styled.icon}>
              <use href={sprite + '#linked-In'} />
            </svg>
          </div>
        </div>
      </aside>

      <div className={styled.map}>{isLoaded ? <Map center={center} /> : <Loader />}</div>
    </div>
  );
};

export { ContactMap };
