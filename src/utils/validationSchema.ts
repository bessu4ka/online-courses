import * as Yup from 'yup';

export const validationSchemaSignIn = Yup.object().shape({
  email: Yup.string()
    .email('Incorrect data')
    .max(100, 'Enter correct data')
    .required('Enter email'),
  password: Yup.string().required('Enter password'),
});
