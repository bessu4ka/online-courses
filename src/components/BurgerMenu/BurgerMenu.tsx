import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from 'utils/routes';

import styled from './BurgerMenu.module.scss';

interface IProps {
	closeModal: () => void;
}

const BurgerMenu: FC<IProps> = ({ closeModal }) => {
	return (
		<nav className={styled.container}>
			<ul className={styled.linkWrapper}>
				<NavLink
					onClick={closeModal}
					className={({ isActive }): string => (isActive ? styled.activeLink : styled.link)}
					to="/"
				>
					home
				</NavLink>
				{routes.map(({ title, link }, index) => {
					return (
						<li key={index}>
							<NavLink
								onClick={closeModal}
								className={({ isActive }): string => (isActive ? styled.activeLink : styled.link)}
								to={link}
							>
								{title}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export { BurgerMenu };
