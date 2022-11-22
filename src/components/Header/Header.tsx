import { Navbar } from 'components/Navbar';

import styled from './Header.module.scss';

const Header = () => {
  return (
    <header className={styled.container}>
      <Navbar />
    </header>
  );
};

export { Header };
