import { FC, useState } from 'react';

import sprite from 'images/sprite.svg';

import styled from './LoginModal.module.scss';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

interface IProps {
  closeModal: () => void;
}

type LoginBody = 'signIn' | 'signUp';
const LoginModal: FC<IProps> = ({ closeModal }) => {
  const [loginBody, setLoginBody] = useState<LoginBody>('signIn');

  function toggleBody() {
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
            <svg className={styled.icon}>
              <use href={sprite + '#facebook'}></use>
            </svg>
            <svg className={styled.icon}>
              <use href={sprite + '#google'}></use>
            </svg>
            <svg className={styled.icon}>
              <use href={sprite + '#linked-In'}></use>
            </svg>
            <svg className={styled.icon}>
              <use href={sprite + '#twitter'}></use>
            </svg>
          </div>
        </article>
      </div>
      <div className={styled.substrate} onClick={closeModal} />
    </div>
  );
};

export { LoginModal };
