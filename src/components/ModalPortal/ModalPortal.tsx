import { useEffect, useMemo, FC } from 'react';
import { createPortal } from 'react-dom';

const modalRootElement = document.querySelector('#modal');

interface IProps {
	children: React.ReactNode;
	isOpen: boolean;
	setIsOpen?: (prev: boolean) => void;
}

const ModalPortal: FC<IProps> = ({ children, isOpen, setIsOpen }) => {
	const element = useMemo(() => document.createElement('div'), []);

	useEffect(() => {
		if (isOpen) {
			modalRootElement?.appendChild(element);

			return () => {
				modalRootElement?.removeChild(element);
			};
		}
	}, [element, isOpen]);

	if (isOpen) {
		return createPortal(children, element);
	}

	return null;
};

export { ModalPortal };
