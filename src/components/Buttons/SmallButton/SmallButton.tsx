import { FC } from 'react';

import { IButton } from 'types/Button';

const SmallButton: FC<IButton> = ({ title }) => {
  return <button>{title}</button>;
};

export { SmallButton };
