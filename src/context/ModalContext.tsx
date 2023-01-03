import { createContext, useState } from 'react';

type ModalMenuContextProviderProps = {
	children: React.ReactNode;
};

type ModalContextType = {
	isOpenMenu: boolean;
	setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
	isOpenLogin: boolean;
	setIsOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContext = createContext({} as ModalContextType);

export const ModalProvider = ({ children }: ModalMenuContextProviderProps): JSX.Element => {
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
	const [isOpenLogin, setIsOpenLogin] = useState<boolean>(false);
	return (
		<ModalContext.Provider value={{ isOpenMenu, setIsOpenMenu, isOpenLogin, setIsOpenLogin }}>
			{children}
		</ModalContext.Provider>
	);
};
