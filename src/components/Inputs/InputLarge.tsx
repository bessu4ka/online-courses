import { FC } from 'react';

import styled from './InputLarge.module.scss';

interface IProps {
  placeholder?: string;
}

const InputLarge: FC<IProps> = ({ placeholder }) => {
  return <input className={styled.container} placeholder={placeholder} type='text' />;
};

export { InputLarge };
