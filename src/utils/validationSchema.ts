import * as Yup from 'yup';

export const validationSchemaSignIn = Yup.object().shape({
	email: Yup.string()
		.email('Incorrect data')
		.max(100, 'Enter correct data')
		.required('Enter email'),
	password: Yup.string().required('Enter password'),
});

export const validationSchemaSignUn = Yup.object().shape({
	fullName: Yup.string()
		.min(6, 'Enter min 6 letters')
		.max(30, 'Max 30 letters')
		.required('Enter your full name'),
	email: Yup.string()
		.email('Incorrect data')
		.max(100, 'Enter correct data')
		.required('Enter email'),
	password: Yup.string()
		.min(8, 'Too Short!')
		.max(30, 'Too Long!')
		.matches(/\d/, 'Enter at least one number')
		.matches(/[a-z]/, 'enter at least one lowercase letter')
		.matches(/[A-Z]/, 'Enter at least one uppercase letter')
		.required('Enter password'),
	confirmPassword: Yup.string()
		.required('Confirm the password')
		.oneOf([Yup.ref('password')], 'Your passwords do not match.'),
});

export const validationSchemaContactForm = Yup.object().shape({
	firsName: Yup.string().required('Required field'),
	secondName: Yup.string().required('Required field'),
	email: Yup.string().required('Required field'),
	phone: Yup.string(),
	message: Yup.string().required('Required field'),
});
