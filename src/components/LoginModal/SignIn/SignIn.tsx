import { Formik, Form, Field } from 'formik';
import { FC } from 'react';

import { validationSchemaSignIn } from 'utils/validationSchema';
import { TextError } from '../TextError';

import styled from './SignIn.module.scss';

interface IProps {
  goToSignUp: () => void;
}

interface IInitialValues {
  email: string;
  password: string;
}

const initialValues: IInitialValues = {
  email: '',
  password: '',
};

function onSubmit(values: IInitialValues): void {
  console.log(values);
}

const SignIn: FC<IProps> = ({ goToSignUp }) => {
  return (
    <div className={styled.container}>
      <h3 className={styled.title}>SignIn</h3>
      <p className={styled.text}>
        Sign in to your account using email and password provided during registration.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaSignIn}
        onSubmit={(values) => {
          onSubmit(values);
        }}>
        {({ errors, touched }) => (
          <Form className={styled.form}>
            <div className={styled.fieldWrapper}>
              <label htmlFor='email'>Email</label>
              <Field
                className={
                  errors.email && touched.email ? styled.errorInput : styled.input
                }
                type='text'
                id='email'
                name='email'
                placeholder='Your working email'
              />
              {errors.email && touched.email ? (
                <TextError>{errors.email}</TextError>
              ) : null}
            </div>

            <div className={styled.fieldWrapper}>
              <label htmlFor='password'>Password</label>
              <Field
                className={
                  errors.password && touched.password ? styled.errorInput : styled.input
                }
                type='password'
                id='password'
                name='password'
              />
              {errors.password && touched.password ? (
                <TextError>{errors.password}</TextError>
              ) : null}
            </div>
          </Form>
        )}
      </Formik>

      <div className={styled.signBtnWrapper}>
        <span>Don't have an account? </span>
        <span className={styled.signBtn} onClick={goToSignUp}>
          Sign up
        </span>
      </div>
    </div>
  );
};

export { SignIn };
