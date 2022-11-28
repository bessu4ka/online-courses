import { ContactForm } from 'components/ContactForm';
import { ContactMap } from 'components/ContactMap';

import styled from './Contacts.module.scss';

const Contacts = () => {
  return (
    <main className={styled.container}>
      <ContactMap />
      <ContactForm />
    </main>
  );
};

export { Contacts };
