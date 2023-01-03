import { Formik, Form, Field } from 'formik';

import { TextError } from 'components/LoginModal/TextError';
import { Checkbox } from 'components/Checkbox';
import { LargeButton } from 'components/Buttons/LargeButton';
import { validationSchemaContactForm } from 'utils/validationSchema';
import formImage from 'images/contactsPage/form.png';

import styled from './ContactForm.module.scss';

interface IInitialValues {
	firsName: string;
	secondName: string;
	email: string;
	phone: number | string;
	message: string;
}

const initialValues: IInitialValues = {
	firsName: '',
	secondName: '',
	email: '',
	phone: '',
	message: '',
};

function onSubmit(values: IInitialValues): void {
	console.log(values);
}

const ContactForm = (): JSX.Element => {
	return (
		<div className={styled.container}>
			<img className={styled.img} src={formImage} alt="form" />

			<div className={styled.formWrapper}>
				<h3>Any questions?</h3>
				<h2>Drop us a line</h2>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchemaContactForm}
					onSubmit={(values): void => {
						onSubmit(values);
					}}
				>
					{({ errors, touched }): JSX.Element => (
						<Form className={styled.form}>
							<div className={styled.inputsWrapper}>
								{/* firsName */}
								<div className={styled.fieldWrapper}>
									<label htmlFor="firsName">First Name*</label>
									<Field
										className={
											errors.firsName && touched.firsName ? styled.errorInput : styled.input
										}
										type="text"
										id="fullName"
										name="fullName"
										placeholder="Your first name"
									/>
									{errors.firsName && touched.firsName ? (
										<TextError>{errors.firsName}</TextError>
									) : null}
								</div>

								{/* secondName */}
								<div className={styled.fieldWrapper}>
									<label htmlFor="secondName">Last Name*</label>
									<Field
										className={
											errors.secondName && touched.secondName ? styled.errorInput : styled.input
										}
										type="text"
										id="secondName"
										name="secondName"
										placeholder="Your last name"
									/>
									{errors.secondName && touched.secondName ? (
										<TextError>{errors.secondName}</TextError>
									) : null}
								</div>

								{/* email */}
								<div className={styled.fieldWrapper}>
									<label htmlFor="email">Email*</label>
									<Field
										className={errors.email && touched.email ? styled.errorInput : styled.input}
										type="text"
										id="email"
										name="email"
										placeholder="Your working email"
									/>
									{errors.email && touched.email ? <TextError>{errors.email}</TextError> : null}
								</div>

								{/* phone */}
								<div className={styled.fieldWrapper}>
									<label htmlFor="phone">Phone</label>
									<Field
										className={errors.phone && touched.phone ? styled.errorInput : styled.input}
										type="text"
										id="phone"
										name="phone"
										placeholder="Your phone number"
									/>
									{errors.phone && touched.phone ? <TextError>{errors.phone}</TextError> : null}
								</div>
							</div>

							{/* message */}
							<div className={styled.fieldWrapper}>
								<label htmlFor="message">Message</label>
								<Field
									as="textarea"
									className={
										errors.message && touched.message ? styled.errorTextarea : styled.textarea
									}
									type="text"
									id="message"
									name="message"
									placeholder="Your message"
								/>
								{errors.message && touched.message ? <TextError>{errors.message}</TextError> : null}
							</div>
						</Form>
					)}
				</Formik>

				<div className={styled.sendWrapper}>
					<div className={styled.checkboxWrapper}>
						<div className={styled.checkbox}>
							<Checkbox />
						</div>
						<p>I agree to receive communications from Createx Online School</p>
					</div>
					<div className={styled.btnWrapper}>
						<LargeButton title="Send message" />
					</div>
				</div>
			</div>
		</div>
	);
};

export { ContactForm };
