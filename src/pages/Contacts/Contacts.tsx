import { ContactMap } from 'components/ContactMap';

import styled from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={styled.container}>
      <ContactMap />
    </div>
  );
};

export { Contacts };
