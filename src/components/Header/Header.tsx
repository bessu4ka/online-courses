import { useEffect, useState } from 'react';

import { Navbar } from 'components/Navbar';

import styled from './Header.module.scss';

const Header = () => {
  const [scroll, setScroll] = useState(false);

  // if (scrollY >= 100) => change new class & choose background color for header
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  return (
    <header className={scroll ? styled.scrolled : styled.container}>
      <Navbar />
    </header>
  );
};

export { Header };
