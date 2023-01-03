import { ContactForm } from 'components/ContactForm';
import { ContactMap } from 'components/ContactMap';

import styled from './Contacts.module.scss';

const Contacts = (): JSX.Element => {
	return (
		<div className={styled.container}>
			<ContactMap />
			<ContactForm />
		</div>
	);
};

export { Contacts };
