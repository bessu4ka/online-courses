import { ContactForm } from 'components/ContactForm';
import { ContactMap } from 'components/ContactMap';

import styled from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={styled.container}>
      <ContactMap />
      <ContactForm />
    </div>
  );
};

export { Contacts };
