import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { LargeButton } from 'components/Buttons/LargeButton';
import { ModalPortal } from 'components/ModalPortal';
import { LoginModal } from 'components/LoginModal';
import { BurgerMenu } from 'components/BurgerMenu';
import { ModalContext } from 'context/ModalContext';
import { routes } from 'utils/routes';
import sprite from 'images/sprite.svg';

import styled from './Navbar.module.scss';

const Navbar = () => {
  const modalContext = useContext(ModalContext);
  const navigate = useNavigate();

  // login menu
  function openModalLogin() {
    modalContext?.setIsOpenLogin(true);
  }

  function closeModalLogin() {
    modalContext?.setIsOpenLogin(false);
  }
  // - - - - - - - - - - - - - -

  // navigate menu
  function openNavigateMenu() {
    modalContext.setIsOpenMenu(true);
  }

  function closeNavigateMenu() {
    modalContext.setIsOpenMenu(false);
  }
  // - - - - - - - - - - - - - -

  return (
    <>
      {/* login portal */}
      <ModalPortal
        children={<LoginModal closeModal={closeModalLogin} />}
        isOpen={modalContext.isOpenLogin}
      />

      {/* menu portal */}
      <ModalPortal
        children={<BurgerMenu closeModal={closeNavigateMenu} />}
        isOpen={modalContext.isOpenMenu}
      />

      <div className={styled.mobileMenuButtonWrapper}>
        {modalContext.isOpenMenu && (
          <svg className={styled.burger} onClick={closeNavigateMenu}>
            <use href={sprite + '#cross-burger'} />
          </svg>
        )}

        {!modalContext.isOpenMenu && (
          <svg className={styled.burger} onClick={openNavigateMenu}>
            <use href={sprite + '#burger'} />
          </svg>
        )}
      </div>

      <nav className={styled.container}>
        <Tippy content='Home page'>
          <svg className={styled.logo} onClick={() => navigate('/')}>
            <use href={sprite + '#logo'} />
          </svg>
        </Tippy>
        <article className={styled.links}>
          {routes.map((route, index) => {
            return (
              <NavLink
                className={({ isActive }) => (isActive ? styled.activeLink : styled.link)}
                key={index}
                to={route.link}>
                {route.title}
              </NavLink>
            );
          })}
        </article>

        <article className={styled.info}>
          <div className={styled.buttonWrapper}>
            <LargeButton title='Get consultation' />
          </div>
          <button className={styled.login} onClick={() => openModalLogin()}>
            <svg className={styled.person}>
              <use href={sprite + '#person'} />
            </svg>
            <span className={styled.text}>Log in / Register</span>
          </button>
        </article>
      </nav>
    </>
  );
};

export { Navbar };
