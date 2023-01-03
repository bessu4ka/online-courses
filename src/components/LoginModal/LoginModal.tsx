import { FC, useState } from 'react';

import sprite from 'images/sprite.svg';

import styled from './LoginModal.module.scss';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

const data = ['facebook', 'google', 'linked-In', 'twitter'];

interface IProps {
	closeModal: () => void;
}

type LoginBody = 'signIn' | 'signUp';

const LoginModal: FC<IProps> = ({ closeModal }) => {
	const [loginBody, setLoginBody] = useState<LoginBody>('signIn');

	function toggleBody(): void {
		loginBody === 'signIn' ? setLoginBody('signUp') : setLoginBody('signIn');
	}

	return (
		<div className={styled.container}>
			<div className={styled.content}>
				{/* login-body-start */}
				{loginBody === 'signIn' ? (
					<SignIn goToSignUp={toggleBody} />
				) : (
					<SignUp goToSignIn={toggleBody} />
				)}
				{/* login-body-end */}

				<article className={styled.signWithIn}>
					<p>Or sign in with</p>
					<div className={styled.iconsWrapper}>
						{data.map((el) => {
							return (
								<svg key={el} className={styled.icon}>
									<use href={sprite + `#${el}`} />
								</svg>
							);
						})}
					</div>
				</article>
			</div>
			<div className={styled.substrate} onClick={closeModal} />
		</div>
	);
};

export { LoginModal };
