import { useJsApiLoader } from '@react-google-maps/api';

import { Loader } from 'components/Loader';
import { Map } from './Map';
import sprite from 'images/sprite.svg';

import styled from './ContactMap.module.scss';

// key api for google map
const APP_API = process.env.REACT_APP_API_KEY;

const contactList = [
  { icon: 'chat', title: 'Talk to us:', detail: 'hello@createx.com' },
  { icon: 'phone', title: 'Call us:', detail: '(405) 555-0128' },
  {
    icon: 'outline',
    title: 'Address:',
    detail: '2464 Royal Ln. Mesa, New Jersey 45463, USA',
  },
];
const iconList = ['facebook', 'twitter', 'youtube', 'telegram', 'instagram', 'linked-In'];

// Kyiv coordinates
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
        <ul className={styled.contactsData}>
          {contactList.map(({ icon, title, detail }, index) => {
            return (
              <li key={index} className={styled.contactWrapper}>
                <svg className={styled.contactsIcon}>
                  <use href={sprite + `#${icon}`} />
                </svg>
                <article>
                  <span className={styled.fieldName}>{title}</span>
                  <span className={styled.field}>{detail}</span>
                </article>
              </li>
            );
          })}
        </ul>

        <div className={styled.socialsData}>
          <p className={styled.followUs}>Follow us:</p>
          {/* socials-icons */}
          <ul className={styled.socialsIconWrapper}>
            {iconList.map((icon, index) => {
              return (
                <li key={index}>
                  <svg className={styled.icon}>
                    <use href={sprite + `#${icon}`} />
                  </svg>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      <div className={styled.map}>{isLoaded ? <Map center={center} /> : <Loader />}</div>
    </div>
  );
};

export { ContactMap };
