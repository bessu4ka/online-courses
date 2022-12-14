import { Formik, Form, Field } from 'formik';
import { FC, useState } from 'react';

import { validationSchemaSignUn } from 'utils/validationSchema';
import { RegularButton } from 'components/Buttons/RegularButton';
import { Checkbox } from 'components/Checkbox';
import { TextError } from '../TextError';

import styled from '../Sign.module.scss';

interface IProps {
	goToSignIn: () => void;
}

interface IInitialValues {
	fullName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const initialValues: IInitialValues = {
	fullName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

function onSubmit(values: IInitialValues): void {
	console.log(values);
}

const SignUp: FC<IProps> = ({ goToSignIn }) => {
	const [checked, setChecked] = useState(false);

	return (
		<div className={styled.container}>
			<h3 className={styled.title}>Sign up</h3>
			<p className={styled.text}>
				Registration takes less than a minute but gives you full control over your studying.
			</p>

			<Formik
				initialValues={initialValues}
				validationSchema={validationSchemaSignUn}
				onSubmit={(values): void => {
					onSubmit(values);
				}}
			>
				{({ errors, touched }): JSX.Element => (
					<Form className={styled.form}>
						{/* //!full name */}
						<div className={styled.fieldWrapper}>
							<label htmlFor="email">Full Name</label>
							<Field
								className={errors.fullName && touched.fullName ? styled.errorInput : styled.input}
								type="text"
								id="fullName"
								name="fullName"
								placeholder="Your full name"
							/>
							{errors.fullName && touched.fullName ? (
								<TextError>{errors.fullName}</TextError>
							) : null}
						</div>

						{/* //!email */}
						<div className={styled.fieldWrapper}>
							<label htmlFor="email">Email</label>
							<Field
								className={errors.email && touched.email ? styled.errorInput : styled.input}
								type="email"
								id="email"
								name="email"
								placeholder="Your working email"
							/>
							{errors.email && touched.email ? <TextError>{errors.email}</TextError> : null}
						</div>

						{/* //!password */}
						<div className={styled.fieldWrapper}>
							<label htmlFor="password">Password</label>
							<Field
								className={errors.password && touched.password ? styled.errorInput : styled.input}
								type="password"
								id="password"
								name="password"
								placeholder="Password"
							/>
							{errors.password && touched.password ? (
								<TextError>{errors.password}</TextError>
							) : null}
						</div>

						{/* //!confirmPassword */}
						<div className={styled.fieldWrapper}>
							<label htmlFor="confirmPassword">Confirm Password</label>
							<Field
								className={
									errors.confirmPassword && touched.confirmPassword
										? styled.errorInput
										: styled.input
								}
								type="password"
								id="confirmPassword"
								name="confirmPassword"
								placeholder="Confirm password"
							/>
							{errors.confirmPassword && touched.confirmPassword ? (
								<TextError>{errors.confirmPassword}</TextError>
							) : null}
						</div>
					</Form>
				)}
			</Formik>

			<div className={styled.infoWrapperSignUp}>
				<div onClick={(): void => setChecked((prev) => !prev)} className={styled.inputWrapper}>
					<Checkbox checked={checked} />
					<p>Remember me</p>
				</div>
			</div>

			<div className={styled.buttonWrapper}>
				<RegularButton title="Sign up" />
			</div>

			<div className={styled.signBtnWrapper}>
				<span>Already have an account? </span>
				<span className={styled.signBtn} onClick={goToSignIn}>
					Sign in
				</span>
			</div>
		</div>
	);
};

export { SignUp };
