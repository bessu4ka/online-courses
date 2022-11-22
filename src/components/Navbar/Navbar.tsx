import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { LargeButton } from 'components/Buttons/LargeButton';
import { ModalPortal } from 'components/ModalPortal';
import { LoginModal } from 'components/LoginModal';
import { routes } from 'utils/routes';
import sprite from 'images/sprite.svg';

import styled from './Navbar.module.scss';

const Navbar = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function openModal() {
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <>
      <ModalPortal
        children={<LoginModal closeModal={closeModal} />}
        isOpen={isOpenModal}
      />

      <nav className={styled.container}>
        <svg className={styled.logo}>
          <use href={sprite + '#logo'}></use>
        </svg>

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
          <div className={styled.login} onClick={() => openModal()}>
            <svg className={styled.person}>
              <use href={sprite + '#person'}></use>
            </svg>
            <div className={styled.text}>Log in / Register</div>
          </div>
        </article>
      </nav>
    </>
  );
};

export { Navbar };
