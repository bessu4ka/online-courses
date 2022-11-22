import { FC } from 'react';
import styled from './SignUp.module.scss';

interface IProps {
  goToSignIn: () => void;
}

const SignUp: FC<IProps> = ({ goToSignIn }) => {
  return (
    <div className={styled.container}>
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
