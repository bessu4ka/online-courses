import { FC } from 'react';

import { IButton } from 'types/Button';

const RegularButton: FC<IButton> = ({ title }) => {
  return <button>{title}</button>;
};

export { RegularButton };
