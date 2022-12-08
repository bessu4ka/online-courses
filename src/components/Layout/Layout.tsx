import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { ModalContext } from 'context/ModalContext';

import styled from './Layout.module.scss';

const Layout = () => {
  const modalContext = useContext(ModalContext);

  useEffect(() => {
    const bodyElement: HTMLElement | null = document.querySelector('body');
    if (modalContext.isOpenLogin || modalContext.isOpenMenu) {
      if (bodyElement) {
        bodyElement.style.overflowY = 'hidden';
      }
    } else {
      if (bodyElement) {
        bodyElement.style.overflowY = 'auto';
      }
    }
  }, [modalContext.isOpenLogin, modalContext.isOpenMenu]);

  return (
    <div className={styled.container}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
